import { Injectable, inject } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

import { AuthService } from '../auth/auth.service';

interface CacheEntry {
  key: string; // `${collection}:${id}` — primary key del store
  collection: string;
  id: string;
  value: unknown;
  cachedAt: number;
}

interface CacheDbSchema extends DBSchema {
  entries: {
    key: string;
    value: CacheEntry;
    indexes: { collection: string };
  };
}

const DB_NAME = 'prospector-crm-cache';
const DB_VERSION = 1;
const STORE = 'entries';

/**
 * Espejo local (IndexedDB) de lo último leído de RTDB, por colección. A diferencia
 * del cache en memoria que ya trae el SDK de RTDB, este SÍ sobrevive a cerrar y
 * reabrir la app sin internet — es la pieza que hace el offline real.
 * Ver .docs/architecture.md §7.
 *
 * Todo queda scoped por uid (key Y el campo `collection` indexado) — la IndexedDB
 * es global del navegador, no se borra sola si el usuario borra su cuenta de
 * Firebase y crea una nueva. Sin este scoping, la cache de una cuenta borrada
 * "contamina" a la siguiente: un repository puede leer datos fantasma de un
 * tenant que ya no existe y creer que son los del tenant actual (bug real:
 * hacía que `seedDefaultStatusesIfEmpty` pensara que ya había estados).
 */
@Injectable({ providedIn: 'root' })
export class LocalCacheStore {
  private readonly auth = inject(AuthService);
  private dbPromise: Promise<IDBPDatabase<CacheDbSchema>> | null = null;

  private getDb(): Promise<IDBPDatabase<CacheDbSchema>> {
    if (!this.dbPromise) {
      this.dbPromise = openDB<CacheDbSchema>(DB_NAME, DB_VERSION, {
        upgrade(db) {
          const store = db.createObjectStore(STORE, { keyPath: 'key' });
          store.createIndex('collection', 'collection');
        },
      });
    }
    return this.dbPromise;
  }

  /** `anon` de fallback solo por si algo lee cache antes de que resuelva auth —
   * no debería pasar en la práctica (todo pasa por rutas guardadas con `authReady`). */
  private scopedCollection(collection: string): string {
    const uid = this.auth.currentUser()?.uid ?? 'anon';
    return `${uid}:${collection}`;
  }

  private buildKey(collection: string, id: string): string {
    return `${this.scopedCollection(collection)}:${id}`;
  }

  async get<T>(collection: string, id: string): Promise<T | null> {
    const db = await this.getDb();
    const entry = await db.get(STORE, this.buildKey(collection, id));
    return (entry?.value as T) ?? null;
  }

  async getAll<T>(collection: string): Promise<T[]> {
    const db = await this.getDb();
    const entries = await db.getAllFromIndex(STORE, 'collection', this.scopedCollection(collection));
    return entries.map((entry) => entry.value as T);
  }

  async put(collection: string, id: string, value: unknown): Promise<void> {
    const db = await this.getDb();
    await db.put(STORE, {
      key: this.buildKey(collection, id),
      collection: this.scopedCollection(collection),
      id,
      value,
      cachedAt: Date.now(),
    });
  }

  async delete(collection: string, id: string): Promise<void> {
    const db = await this.getDb();
    await db.delete(STORE, this.buildKey(collection, id));
  }
}
