import { inject } from '@angular/core';

import { AuthService } from '../../core/auth/auth.service';
import { SyncEngine } from '../../core/sync/sync-engine.service';

/**
 * Base de todos los repositories: resuelve el path multi-tenant (`tenants/{uid}/...`)
 * y expone el `SyncEngine`. Ningún repository importa Firebase directo — todo pasa
 * por acá. Ver .docs/architecture.md §3 y §14 (preparación para SaaS).
 */
export abstract class BaseRepository {
  protected readonly auth = inject(AuthService);
  protected readonly sync = inject(SyncEngine);

  protected get uid(): string {
    const uid = this.auth.currentUser()?.uid;
    if (!uid) {
      throw new Error('BaseRepository: no hay usuario autenticado — no se puede resolver el path del tenant.');
    }
    return uid;
  }

  protected tenantPath(...segments: string[]): string {
    return ['tenants', this.uid, ...segments].join('/');
  }

  /** ID único generado en cliente — funciona offline, sin depender de un round-trip a Firebase. */
  protected generateId(): string {
    return crypto.randomUUID();
  }
}
