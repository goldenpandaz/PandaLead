/**
 * Un "trabajo" de un cliente. Un cliente (Prospect) puede tener varios.
 * Vive en `/tenants/{uid}/projects/{id}`.
 */
export interface ProjectPayment {
  id: string;
  amount: number;
  /** yyyy-mm-dd */
  date: string;
  note?: string;
}

export interface ProjectNote {
  id: string;
  text: string;
  createdAt: number;
}

export const WORK_STATUSES = ['Pendiente', 'En proceso', 'Entregado'] as const;

export interface Project {
  id: string;
  prospectId: string;
  startDate: string;
  dueDate?: string;
  /** FK al catálogo `ServiceConfig`, más nombre/precio copiados al momento de la venta. */
  serviceId?: string;
  serviceName?: string;
  servicePrice?: number;
  discountType?: 'fixed' | 'percentage';
  discountValue?: number;
  observations?: string;
  /** Uno de `WORK_STATUSES`. */
  status: string;
  /** Abonos del trabajo. El pagado/saldo se derivan con `project-finance.util`. Siempre array. */
  payments: ProjectPayment[];
  /** Seguimiento del trabajo. Siempre array. */
  notes: ProjectNote[];
}
