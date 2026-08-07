/**
 * Estado configurable del pipeline comercial. Vive en `/tenants/{uid}/config/statuses/{id}`.
 * No hay una máquina de estados rígida: cualquier transición está permitida y queda
 * registrada en el historial. Los flags is* le dicen al dashboard qué contar como
 * "cliente"/"perdido"/"cerrado" sin hardcodear nombres. Ver .docs/architecture.md §11.
 */
export interface StatusConfig {
  id: string;
  label: string;
  order: number;
  color: string;
  isWon: boolean;
  isLost: boolean;
  isFinal: boolean;
  /** Al pasar un cliente a este estado, se obliga a elegir un servicio del
   * catálogo antes de aplicar el cambio (y se crea el Proyecto si no existía
   * todavía). Pensado para estados "en serio" — cotización enviada, en
   * proceso, cliente… — no para las etapas tempranas del embudo ni Perdido. */
  requiresService?: boolean;
}
