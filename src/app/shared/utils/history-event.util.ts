import { HistoryEventType } from '../../domain/enums/history-event-type.enum';
import { HistoryEvent } from '../../domain/models/history-event.model';

const LABEL: Record<HistoryEventType, string> = {
  [HistoryEventType.Created]: 'Cliente creado',
  [HistoryEventType.Edited]: 'Datos editados',
  [HistoryEventType.StatusChanged]: 'Estado cambiado',
  [HistoryEventType.NoteAdded]: 'Nota agregada',
  [HistoryEventType.CaptureAdded]: 'Captura agregada',
  [HistoryEventType.WhatsappOpened]: 'WhatsApp abierto',
  [HistoryEventType.FollowupScheduled]: 'Seguimiento programado',
  [HistoryEventType.FollowupCompleted]: 'Seguimiento completado',
  [HistoryEventType.ConvertedToClient]: 'Convertido a cliente',
  [HistoryEventType.ProjectCreated]: 'Trabajo creado',
  [HistoryEventType.ServiceAssigned]: 'Servicio asignado',
};

const ICON: Record<HistoryEventType, string> = {
  [HistoryEventType.Created]: 'person_add',
  [HistoryEventType.Edited]: 'edit',
  [HistoryEventType.StatusChanged]: 'swap_horiz',
  [HistoryEventType.NoteAdded]: 'sticky_note_2',
  [HistoryEventType.CaptureAdded]: 'photo_camera',
  [HistoryEventType.WhatsappOpened]: 'chat',
  [HistoryEventType.FollowupScheduled]: 'event',
  [HistoryEventType.FollowupCompleted]: 'event_available',
  [HistoryEventType.ConvertedToClient]: 'handshake',
  [HistoryEventType.ProjectCreated]: 'work',
  [HistoryEventType.ServiceAssigned]: 'sell',
};

/** Texto en español, ícono y detalle opcional de un evento de la cronología. */
export function describeHistoryEvent(event: HistoryEvent): { title: string; icon: string; detail?: string } {
  const serviceName = event.payload?.['serviceName'];
  return {
    title: LABEL[event.type] ?? event.type,
    icon: ICON[event.type] ?? 'history',
    detail: typeof serviceName === 'string' && serviceName ? serviceName : undefined,
  };
}
