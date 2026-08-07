/**
 * Vive en `/tenants/{uid}/projects/{id}`. Se crea al convertir un prospecto en cliente.
 */
export interface Project {
  id: string;
  prospectId: string;
  startDate: string;
  dueDate?: string;
  /** FK al catálogo `ServiceConfig`, más nombre/precio copiados al momento de la venta. */
  serviceId?: string;
  serviceName?: string;
  servicePrice?: number;
  deposit?: number;
  balance?: number;
  domain?: string;
  hosting?: string;
  observations?: string;
  status: string;
  /** Marca manual de "ya pagó, quedó cerrado" — pasa el Estado del prospecto a
   * un estado Final y bloquea Estado/Servicio en la tabla hasta que se destilde
   * (con confirmación en ambos sentidos). No confundir con `deposit`/`balance`:
   * esto es un candado, no un monto. */
  paid?: boolean;
}
