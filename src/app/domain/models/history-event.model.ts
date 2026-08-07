import { HistoryEventType } from '../enums/history-event-type.enum';

/**
 * Vive en `/tenants/{uid}/history/{prospectId}/{eventId}`. Se crea, nunca se edita
 * ni se borra — es la cronología auditable del prospecto.
 */
export interface HistoryEvent {
  id: string;
  prospectId: string;
  type: HistoryEventType;
  payload?: Record<string, unknown>;
  createdAt: number;
}
