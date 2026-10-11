import { Project } from '../../domain/models/project.model';

export type ProjectPaymentStatus = 'none' | 'partial' | 'paid';

export const PAYMENT_STATUS_LABEL: Record<ProjectPaymentStatus, string> = {
  none: 'Sin pago',
  partial: 'Abonado',
  paid: 'Pagado',
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

/** El trabajo "principal" de un cliente: el más reciente con saldo pendiente;
 * si ninguno debe nada, el más reciente. */
export function primaryProject(projects: Project[]): Project | null {
  if (!projects.length) return null;
  const sorted = [...projects].sort((a, b) => (b.startDate ?? '').localeCompare(a.startDate ?? ''));
  return sorted.find((p) => projectBalance(p) > 0) ?? sorted[0];
}
