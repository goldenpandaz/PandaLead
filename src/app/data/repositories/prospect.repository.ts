import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Prospect, ProspectDetails } from '../../domain/models/prospect.model';
import { BaseRepository } from './base.repository';

const COLLECTION = 'prospects';
const DETAILS_COLLECTION = 'prospectDetails';

/** Doc tal cual está guardado: los viejos traen `category` (string) y no `categories`. */
type LegacyProspect = Omit<Prospect, 'categories'> & { categories?: string[]; category?: string };

/** Único punto de compatibilidad con docs anteriores a las categorías múltiples. */
function normalizeCategories(raw: LegacyProspect): Prospect {
  const { category, categories, ...rest } = raw;
  if (Array.isArray(categories)) return { ...rest, categories };
  return { ...rest, categories: category ? [category] : [] };
}

@Injectable({ providedIn: 'root' })
export class ProspectRepository extends BaseRepository {
  watchAll(): Observable<Prospect[]> {
    return this.sync
      .watchCollection<LegacyProspect>(COLLECTION, this.tenantPath(COLLECTION))
      .pipe(map((list) => list.map(normalizeCategories)));
  }

  watchOne(id: string): Observable<Prospect | null> {
    return this.sync
      .watchDoc<LegacyProspect>(COLLECTION, id, this.tenantPath(COLLECTION, id))
      .pipe(map((p) => (p ? normalizeCategories(p) : null)));
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
