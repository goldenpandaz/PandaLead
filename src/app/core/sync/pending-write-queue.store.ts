import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

export type WriteOperation = 'set' | 'update' | 'remove';

export interface PendingWrite {
  id: number;
  /** Path completo de RTDB, ya escaneado por tenant (ej. `tenants/{uid}/prospects/{id}`). */
  path: string;
  operation: WriteOperation;
  payload?: unknown;
  createdAt: number;
}

interface QueueDbSchema extends DBSchema {
  writes: {
    key: number;
    value: PendingWrite;
  };
}

const DB_NAME = 'prospector-crm-write-queue';
const DB_VERSION = 1;
const STORE = 'writes';

/**
 * Mutaciones hechas offline, en espera de sincronizarse al reconectar. Se procesan
 * en orden de creación (FIFO) — suficiente para una herramienta de un solo usuario,
 * sin necesidad de resolución de conflictos compleja. Ver .docs/architecture.md §7.
 */
@Injectable({ providedIn: 'root' })
export class PendingWriteQueueStore {
  private dbPromise: Promise<IDBPDatabase<QueueDbSchema>> | null = null;

  private getDb(): Promise<IDBPDatabase<QueueDbSchema>> {
    if (!this.dbPromise) {
      this.dbPromise = openDB<QueueDbSchema>(DB_NAME, DB_VERSION, {
        upgrade(db) {
          db.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
        },
      });
    }
    return this.dbPromise;
  }

  async enqueue(write: Omit<PendingWrite, 'id'>): Promise<void> {
    const db = await this.getDb();
    await db.add(STORE, write as PendingWrite);
  }

  /** Devuelve las escrituras pendientes ordenadas por `id` (orden de creación). */
  async getAll(): Promise<PendingWrite[]> {
    const db = await this.getDb();
    return db.getAll(STORE);
  }

  async remove(id: number): Promise<void> {
    const db = await this.getDb();
    await db.delete(STORE, id);
  }

  async count(): Promise<number> {
    const db = await this.getDb();
    return db.count(STORE);
  }
}
