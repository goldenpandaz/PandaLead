import { Project } from '../../domain/models/project.model';

export type ProjectPaymentStatus = 'none' | 'partial' | 'paid';

/** Texto cuando un cliente no tiene ningún servicio asignado. */
export const NO_SERVICE_LABEL = 'Sin servicio';

export const PAYMENT_STATUS_LABEL: Record<ProjectPaymentStatus, string> = {
  none: 'Sin pago',
  partial: 'Abonado',
  paid: 'Pagado',
};

/** Color del punto de cada estado de trabajo. */
export const WORK_STATUS_COLOR: Record<string, string> = {
  Pendiente: '#ffb74d',
  'En proceso': '#4fc3f7',
  Entregado: '#66bb6a',
};

type FinanceFields = Pick<Project, 'servicePrice' | 'discountType' | 'discountValue' | 'payments'>;

export function projectDiscountAmount(p: FinanceFields): number {
  const price = p.servicePrice ?? 0;
  const value = p.discountValue ?? 0;
  if (!value || price <= 0) return 0;
  const raw = p.discountType === 'percentage' ? (price * value) / 100 : value;
  return Math.min(Math.max(raw, 0), price);
}

export function projectTotal(p: FinanceFields): number {
  return Math.max(0, (p.servicePrice ?? 0) - projectDiscountAmount(p));
}

export function projectPaidAmount(p: Pick<Project, 'payments'>): number {
  return (p.payments ?? []).reduce((sum, pay) => sum + (pay.amount || 0), 0);
}

export function projectBalance(p: FinanceFields): number {
  return Math.max(0, projectTotal(p) - projectPaidAmount(p));
}

export function projectPaymentStatus(p: FinanceFields): ProjectPaymentStatus {
  const total = projectTotal(p);
  const paid = projectPaidAmount(p);
  if (paid <= 0) return 'none';
  if (total <= 0 || paid >= total) return 'paid';
  return 'partial';
}

/** Descarta trabajos huérfanos (de clientes ya borrados) para no contarlos en
 * ingresos. Si todavía no hay clientes cargados no filtra nada, así una lista
 * vacía por carga inicial no hace desaparecer los ingresos. */
export function projectsOfExistingProspects(projects: Project[], prospects: readonly { id: string }[]): Project[] {
  if (prospects.length === 0) return projects;
  const ids = new Set(prospects.map((p) => p.id));
  return projects.filter((p) => ids.has(p.prospectId));
}

/** Frase de advertencia para el modal de borrar cliente: qué trabajos y cobros se pierden. '' si no tiene. */
export function describeJobsLoss(projects: Project[]): string {
  if (projects.length === 0) return '';
  const paid = projects.reduce((sum, p) => sum + projectPaidAmount(p), 0);
  const jobs = `${projects.length} trabajo${projects.length !== 1 ? 's' : ''}`;
  const money = paid > 0 ? ` y los pagos registrados ($${paid.toLocaleString('es-CO')}, que dejarán de contar en tus ingresos)` : '';
  return ` También se ${projects.length !== 1 ? 'borran' : 'borra'} ${jobs}${money}.`;
}

/** El trabajo "principal" de un cliente: el más reciente con saldo pendiente;
 * si ninguno debe nada, el más reciente. */
export function primaryProject(projects: Project[]): Project | null {
  if (!projects.length) return null;
  const sorted = [...projects].sort((a, b) => (b.startDate ?? '').localeCompare(a.startDate ?? ''));
  return sorted.find((p) => projectBalance(p) > 0) ?? sorted[0];
}
