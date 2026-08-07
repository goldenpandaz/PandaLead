import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from '../../domain/models/note.model';
import { BaseRepository } from './base.repository';

const COLLECTION = 'notes';

/** Vive en `/tenants/{uid}/notes/{prospectId}/{noteId}` (.docs/architecture.md §6). */
@Injectable({ providedIn: 'root' })
export class NoteRepository extends BaseRepository {
  watchForProspect(prospectId: string): Observable<Note[]> {
    return this.sync.watchCollection<Note>(`${COLLECTION}:${prospectId}`, this.tenantPath(COLLECTION, prospectId));
  }

  async add(prospectId: string, text: string): Promise<string> {
    const id = this.generateId();
    const note: Note = {
      id,
      prospectId,
      text,
      authorId: this.auth.currentUser()?.uid ?? 'unknown',
      createdAt: Date.now(),
    };
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'set', note);
    return id;
  }

  async update(prospectId: string, id: string, text: string): Promise<void> {
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'update', {
      text,
      updatedAt: Date.now(),
    });
  }

  async delete(prospectId: string, id: string): Promise<void> {
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'remove');
  }
}
