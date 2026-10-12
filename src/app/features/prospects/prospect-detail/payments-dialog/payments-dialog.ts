import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';

import { ProjectRepository } from '../../../../data/repositories/project.repository';
import { ProjectPayment } from '../../../../domain/models/project.model';
import { ConfirmDialog, ConfirmDialogData } from '../../../../shared/dialogs/confirm-dialog/confirm-dialog';
import { MoneyInputDirective } from '../../../../shared/directives/money-input.directive';
import { MoneyPipe } from '../../../../shared/pipes/money.pipe';
import { formatIsoDate, parseIsoDate } from '../../../../shared/utils/date-input.util';
import { projectBalance, projectPaidAmount, projectTotal } from '../../../../shared/utils/project-finance.util';

export interface PaymentsDialogData {
  prospectId: string;
  projectId: string;
}

@Component({
  selector: 'app-payments-dialog',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MoneyInputDirective,
    MoneyPipe,
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'es-CO' }],
  templateUrl: './payments-dialog.html',
  styleUrl: './payments-dialog.scss',
})
export class PaymentsDialog {
  private readonly projectRepo = inject(ProjectRepository);
  private readonly dialog = inject(MatDialog);
  readonly data = inject<PaymentsDialogData>(MAT_DIALOG_DATA);

  // En vivo: se relee del repo, así el resumen se actualiza apenas se guarda.
  private readonly projects = toSignal(this.projectRepo.watchByProspect(this.data.prospectId), { initialValue: [] });
  readonly project = computed(() => this.projects().find((p) => p.id === this.data.projectId) ?? null);

  readonly total = computed(() => (this.project() ? projectTotal(this.project()!) : 0));
  readonly paid = computed(() => (this.project() ? projectPaidAmount(this.project()!) : 0));
  readonly balance = computed(() => (this.project() ? projectBalance(this.project()!) : 0));
  readonly sortedPayments = computed(() =>
    [...(this.project()?.payments ?? [])].sort((a, b) => b.date.localeCompare(a.date)),
  );

  readonly editingId = signal<string | null>(null);
  readonly amount = signal<number | null>(null);
  readonly date = signal<Date | null>(new Date());
  readonly note = signal('');
  readonly saving = signal(false);

  /** Sin tope: a veces se redondea o pagan un poco de más. */
  readonly canSave = computed(() => (this.amount() ?? 0) > 0 && !!formatIsoDate(this.date()) && !this.saving());
  readonly showForm = computed(() => this.editingId() !== null || this.balance() > 0);

  startEdit(payment: ProjectPayment): void {
    this.editingId.set(payment.id);
    this.amount.set(payment.amount);
    this.date.set(parseIsoDate(payment.date));
    this.note.set(payment.note ?? '');
  }

  cancelEdit(): void {
    this.editingId.set(null);
    this.amount.set(null);
    this.date.set(new Date());
    this.note.set('');
  }

  async save(): Promise<void> {
    const project = this.project();
    const date = formatIsoDate(this.date());
    if (!project || !date || !this.canSave()) return;

    this.saving.set(true);
    try {
      const note = this.note().trim();
      const entry: ProjectPayment = {
        id: this.editingId() ?? crypto.randomUUID(),
        amount: this.amount()!,
        date,
        ...(note ? { note } : {}),
      };
      const payments = this.editingId()
        ? project.payments.map((p) => (p.id === entry.id ? entry : p))
        : [...project.payments, entry];
      await this.projectRepo.update(project.id, { payments });
      this.cancelEdit();
    } finally {
      this.saving.set(false);
    }
  }

  async remove(payment: ProjectPayment): Promise<void> {
    const project = this.project();
    if (!project) return;
    const ok = await firstValueFrom(
      this.dialog
        .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
          width: '380px',
          data: { title: 'Eliminar abono', message: '¿Seguro que querés eliminar este abono?', confirmLabel: 'Eliminar', danger: true, icon: 'delete' },
        })
        .afterClosed(),
    );
    if (!ok) return;
    if (this.editingId() === payment.id) this.cancelEdit();
    await this.projectRepo.update(project.id, { payments: project.payments.filter((p) => p.id !== payment.id) });
  }
}
