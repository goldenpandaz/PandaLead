import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { UserProfile } from '../../domain/models/user-profile.model';
import { BaseRepository } from './base.repository';

const COLLECTION = 'profile';
const DOC_ID = 'main';

/** Vive en `/tenants/{uid}/profile/main`. Un único documento por cuenta. */
@Injectable({ providedIn: 'root' })
export class ProfileRepository extends BaseRepository {
  watch(): Observable<UserProfile | null> {
    return this.sync
      .watchCollection<UserProfile>(COLLECTION, this.tenantPath(COLLECTION))
      .pipe(map((items) => items.find((item) => item.id === DOC_ID) ?? null));
  }

  async save(patch: Partial<Omit<UserProfile, 'id'>>): Promise<void> {
    await this.sync.write(COLLECTION, DOC_ID, this.tenantPath(COLLECTION, DOC_ID), 'update', patch);
  }
}
