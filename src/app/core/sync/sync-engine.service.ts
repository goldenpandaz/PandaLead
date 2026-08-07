import { Injectable, effect, inject } from '@angular/core';
import { Database, get, onValue, ref, remove, set, update } from 'firebase/database';
import { Observable } from 'rxjs';

import { FIREBASE_DATABASE } from '../firebase/firebase.tokens';
import { ConnectivityService } from './connectivity.service';
import { LocalCacheStore } from './local-cache.store';
import { PendingWriteQueueStore, WriteOperation } from './pending-write-queue.store';

/**
 * Firebase rechaza cualquier valor `undefined` en un `set`/`update` (tira error
 * ANTES de llegar a la red) — y los campos opcionales vacíos de un form llegan
 * como `undefined`, no como ausentes (`value.email || undefined`, por ejemplo).
 * Se limpia acá, en el único lugar que realmente habla con Firebase, para no
 * tener que acordarse en cada repository.
 */
function stripUndefined<T>(value: T): T {
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map((item) => stripUndefined(item)) as unknown as T;

  const result: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
    if (v === undefined) continue;
    result[key] = stripUndefined(v);
  }
  return result as T;
}

/**
 * Única puerta de entrada a la persistencia. Los `repositories/` de `data/` hablan
 * SOLO con esto — nunca importan `firebase/database` directo — así ni ellos ni los
 * componentes de `features/` necesitan saber si un dato vino de la red o de cache.
 *
 * Lectura: cache-first. Se emite lo que haya en IndexedDB de inmediato (respuesta
 * instantánea, incluso offline) y después se actualiza en vivo con lo que llegue
 * de RTDB.
 *
 * Escritura: optimista. Se aplica al cache local al toque (la UI no espera a la
 * red) y se intenta mandar a RTDB; si falla o estamos offline, se encola en
 * `PendingWriteQueueStore` y se reintenta sola al reconectar.
 *
 * Ver .docs/architecture.md §7.
 */
@Injectable({ providedIn: 'root' })
export class SyncEngine {
  private readonly database: Database = inject(FIREBASE_DATABASE);
  private readonly cache = inject(LocalCacheStore);
  private readonly queue = inject(PendingWriteQueueStore);
  private readonly connectivity = inject(ConnectivityService);

  constructor() {
    // Al reconectar, vaciamos la cola. `effect` corre de nuevo cada vez que
    // `isOnline()` cambia (Signal) — no hace falta suscribirse a mano.
    effect(() => {
      if (this.connectivity.isOnline()) {
        void this.flushPendingWrites();
      }
    });
  }

  /**
   * Escucha en vivo una colección completa (ej. todos los prospectos de un tenant).
   * `path` es el path completo de RTDB, ya armado por el repository con el uid
   * del tenant (ej. `tenants/{uid}/prospects`).
   */
  watchCollection<T extends { id: string }>(collection: string, path: string): Observable<T[]> {
    return new Observable<T[]>((subscriber) => {
      let cacheEmitted = false;

      this.cache.getAll<T>(collection).then((cached) => {
        if (!cacheEmitted && cached.length) subscriber.next(cached);
      });

      const dbRef = ref(this.database, path);
      const unsubscribe = onValue(
        dbRef,
        (snapshot) => {
          cacheEmitted = true;
          const raw = (snapshot.val() ?? {}) as Record<string, object>;
          const items = Object.entries(raw).map(([id, value]) => ({ id, ...value }) as T);
          items.forEach((item) => void this.cache.put(collection, item.id, item));
          subscriber.next(items);
        },
        (error) => subscriber.error(error),
      );

      return () => unsubscribe();
    });
  }

  /**
   * Lectura de un solo tiro directo a RTDB — sin cache, sin `onValue` en vivo.
   * Para checks tipo "¿esta colección está vacía en el servidor?" (ej. seeds de
   * arranque) donde NO se puede confiar en la primera emisión de `watchCollection`
   * (cache-first: esa primera emisión puede ser IndexedDB local, potencialmente
   * stale o de una cuenta anterior — ver comentario en `LocalCacheStore`).
   */
  async readCollectionOnce<T extends { id: string }>(path: string): Promise<T[]> {
    const snapshot = await get(ref(this.database, path));
    const raw = (snapshot.val() ?? {}) as Record<string, object>;
    return Object.entries(raw).map(([id, value]) => ({ id, ...value }) as T);
  }

  /**
   * Para colecciones anidadas por padre (ej. `followups/{prospectId}/{followupId}`):
   * lee todo el árbol y aplana en un solo array. Pensado para vistas agregadas
   * (dashboard) — sin cache-first, porque no es crítico que esté instantáneo
   * offline como sí lo es la lista principal de prospectos.
   */
  watchNestedCollection<T extends { id: string }>(path: string): Observable<T[]> {
    return new Observable<T[]>((subscriber) => {
      const dbRef = ref(this.database, path);
      const unsubscribe = onValue(
        dbRef,
        (snapshot) => {
          const raw = (snapshot.val() ?? {}) as Record<string, Record<string, object>>;
          const items = Object.values(raw).flatMap((group) =>
            Object.entries(group ?? {}).map(([id, value]) => ({ id, ...value }) as T),
          );
          subscriber.next(items);
        },
        (error) => subscriber.error(error),
      );
      return () => unsubscribe();
    });
  }

  /** Escucha en vivo un único documento (ej. la ficha de un prospecto). */
  watchDoc<T>(collection: string, id: string, path: string): Observable<T | null> {
    return new Observable<T | null>((subscriber) => {
      this.cache.get<T>(collection, id).then((cached) => {
        if (cached) subscriber.next(cached);
      });

      const dbRef = ref(this.database, path);
      const unsubscribe = onValue(
        dbRef,
        (snapshot) => {
          const value = (snapshot.val() as T | null) ?? null;
          if (value) void this.cache.put(collection, id, value);
          else void this.cache.delete(collection, id);
          subscriber.next(value);
        },
        (error) => subscriber.error(error),
      );

      return () => unsubscribe();
    });
  }

  /**
   * Escribe (set/update/remove) de forma optimista: cache local primero, después
   * intenta red; si no hay conexión o la red falla, encola para reintentar.
   */
  async write(collection: string, id: string, path: string, operation: WriteOperation, payload?: unknown): Promise<void> {
    const cleanPayload = operation === 'remove' ? undefined : stripUndefined(payload);

    if (operation === 'remove') {
      await this.cache.delete(collection, id);
    } else if (operation === 'update') {
      // `payload` es parcial (solo los campos que cambian) — si lo guardáramos tal
      // cual pisaríamos el resto del documento cacheado. Mergeamos sobre lo que haya.
      const existing = (await this.cache.get<object>(collection, id)) ?? {};
      await this.cache.put(collection, id, { ...existing, ...(cleanPayload as object) });
    } else {
      await this.cache.put(collection, id, cleanPayload);
    }

    if (this.connectivity.isOnline()) {
      try {
        await this.applyRemoteWrite(path, operation, cleanPayload);
        return;
      } catch (error) {
        // Se creía online pero la escritura falló igual (ej. reglas de seguridad,
        // se cortó justo en el medio). Se loguea — antes fallaba en silencio y
        // parecía que "no pasaba nada". Cae al mismo camino que offline: se encola.
        console.warn(`SyncEngine: falló la escritura en "${path}", se encola para reintentar.`, error);
      }
    }

    await this.queue.enqueue({ path, operation, payload: cleanPayload, createdAt: Date.now() });
  }

  /** Vacía la cola en orden FIFO. Si una escritura falla, se corta ahí — se
   * mantiene el orden en vez de saltear y desordenar la sincronización. */
  async flushPendingWrites(): Promise<void> {
    const pending = await this.queue.getAll();
    for (const write of pending) {
      try {
        await this.applyRemoteWrite(write.path, write.operation, write.payload);
        await this.queue.remove(write.id);
      } catch (error) {
        console.warn(`SyncEngine: sigue fallando la escritura pendiente en "${write.path}", se corta el flush.`, error);
        break;
      }
    }
  }

  private async applyRemoteWrite(path: string, operation: WriteOperation, payload?: unknown): Promise<void> {
    const dbRef = ref(this.database, path);
    if (operation === 'set') await set(dbRef, payload);
    else if (operation === 'update') await update(dbRef, payload as object);
    else await remove(dbRef);
  }
}
