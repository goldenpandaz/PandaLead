/**
 * Estado configurable del pipeline comercial. Vive en `/tenants/{uid}/config/statuses/{id}`.
 * No hay una máquina de estados rígida: cualquier transición está permitida y queda
 * registrada en el historial. Ver .docs/architecture.md §11.
 */
export interface StatusConfig {
  id: string;
  label: string;
  order: number;
  color: string;
  /** Al pasar un cliente a este estado, se obliga a tener al menos un trabajo
   * cargado antes de aplicar el cambio (y en el alta se pide elegir un servicio).
   * Pensado para estados "en serio" — cotización enviada, en proceso, cliente… —
   * no para las etapas tempranas del embudo ni Perdido. */
  requiresService: boolean;
}
