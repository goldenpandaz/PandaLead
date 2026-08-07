/**
 * Tipos de evento registrados automáticamente en la cronología de un prospecto.
 * Ver arquitectura §12 (.docs/architecture.md) — todo cambio relevante se loguea,
 * nunca se sobreescribe.
 */
export enum HistoryEventType {
  Created = 'created',
  Edited = 'edited',
  StatusChanged = 'status_changed',
  NoteAdded = 'note_added',
  CaptureAdded = 'capture_added',
  WhatsappOpened = 'whatsapp_opened',
  FollowupScheduled = 'followup_scheduled',
  FollowupCompleted = 'followup_completed',
  ConvertedToClient = 'converted_to_client',
  ProjectCreated = 'project_created',
  ServiceAssigned = 'service_assigned',
}
