import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prospect, ProspectDetails } from '../../domain/models/prospect.model';
import { BaseRepository } from './base.repository';

const COLLECTION = 'prospects';
const DETAILS_COLLECTION = 'prospectDetails';

@Injectable({ providedIn: 'root' })
export class ProspectRepository extends BaseRepository {
  watchAll(): Observable<Prospect[]> {
    return this.sync.watchCollection<Prospect>(COLLECTION, this.tenantPath(COLLECTION));
  }

  watchOne(id: string): Observable<Prospect | null> {
    return this.sync.watchDoc<Prospect>(COLLECTION, id, this.tenantPath(COLLECTION, id));
  }

  watchDetails(id: string): Observable<ProspectDetails | null> {
    return this.sync.watchDoc<ProspectDetails>(DETAILS_COLLECTION, id, this.tenantPath(DETAILS_COLLECTION, id));
  }

  async create(data: Omit<Prospect, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const id = this.generateId();
    const now = Date.now();
    const prospect: Prospect = { ...data, id, createdAt: now, updatedAt: now };
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'set', prospect);
    return id;
  }

  // `null` en un campo opcional lo borra de verdad en RTDB — `undefined` no
  // alcanza, ver comentario en ProjectRepository.update.
  async update(id: string, changes: Partial<{ [K in keyof Omit<Prospect, 'id' | 'createdAt'>]: Prospect[K] | null }>): Promise<void> {
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'update', {
      ...changes,
      updatedAt: Date.now(),
    });
  }

  async setFavorite(id: string, favorite: boolean): Promise<void> {
    await this.update(id, { favorite });
  }

  async saveDetails(id: string, details: Omit<ProspectDetails, 'prospectId'>): Promise<void> {
    await this.sync.write(DETAILS_COLLECTION, id, this.tenantPath(DETAILS_COLLECTION, id), 'set', {
      prospectId: id,
      ...details,
    });
  }

  async delete(id: string): Promise<void> {
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'remove');
    await this.sync.write(DETAILS_COLLECTION, id, this.tenantPath(DETAILS_COLLECTION, id), 'remove');
  }
}
