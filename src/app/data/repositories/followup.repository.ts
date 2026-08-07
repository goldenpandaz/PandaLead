import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Followup } from '../../domain/models/followup.model';
import { BaseRepository } from './base.repository';

const COLLECTION = 'followups';

/** Vive en `/tenants/{uid}/followups/{prospectId}/{followupId}` (.docs/architecture.md §6). */
@Injectable({ providedIn: 'root' })
export class FollowupRepository extends BaseRepository {
  watchForProspect(prospectId: string): Observable<Followup[]> {
    return this.sync.watchCollection<Followup>(`${COLLECTION}:${prospectId}`, this.tenantPath(COLLECTION, prospectId));
  }

  /** Todos los seguimientos pendientes de TODOS los prospectos — para el dashboard. */
  watchAllPending(): Observable<Followup[]> {
    return this.sync
      .watchNestedCollection<Followup>(this.tenantPath(COLLECTION))
      .pipe(map((items) => items.filter((f) => f.status === 'pending')));
  }

  async add(prospectId: string, data: Omit<Followup, 'id' | 'prospectId' | 'status'>): Promise<string> {
    const id = this.generateId();
    const followup: Followup = { id, prospectId, status: 'pending', ...data };
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'set', followup);
    return id;
  }

  async setStatus(prospectId: string, id: string, status: Followup['status']): Promise<void> {
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'update', { status });
  }

  async delete(prospectId: string, id: string): Promise<void> {
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'remove');
  }
}
