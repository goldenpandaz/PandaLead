import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoryEvent } from '../../domain/models/history-event.model';
import { HistoryEventType } from '../../domain/enums/history-event-type.enum';
import { BaseRepository } from './base.repository';

const COLLECTION = 'history';

/**
 * Se crea, nunca se edita ni se borra — cronología auditable de un prospecto.
 * Vive en `/tenants/{uid}/history/{prospectId}/{eventId}` (.docs/architecture.md §6).
 */
@Injectable({ providedIn: 'root' })
export class HistoryRepository extends BaseRepository {
  watchForProspect(prospectId: string): Observable<HistoryEvent[]> {
    return this.sync.watchCollection<HistoryEvent>(
      `${COLLECTION}:${prospectId}`,
      this.tenantPath(COLLECTION, prospectId),
    );
  }

  async log(prospectId: string, type: HistoryEventType, payload?: Record<string, unknown>): Promise<void> {
    const id = this.generateId();
    const event: HistoryEvent = { id, prospectId, type, payload, createdAt: Date.now() };
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'set', event);
  }
}
