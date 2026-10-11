import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { ProjectRepository } from '../../../../data/repositories/project.repository';
import { MoneyPipe } from '../../../../shared/pipes/money.pipe';
import {
  PAYMENT_STATUS_LABEL,
  WORK_STATUS_COLOR,
  projectBalance,
  projectDiscountAmount,
  projectPaidAmount,
  projectPaymentStatus,
  projectTotal,
} from '../../../../shared/utils/project-finance.util';

export interface JobViewDialogData {
  prospectId: string;
  projectId: string;
}

/** Vista de solo lectura de un trabajo: detalles, notas y pagos, en ese orden. */
@Component({
  selector: 'app-job-view-dialog',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatDialogModule, MatIconModule, MoneyPipe],
  templateUrl: './job-view-dialog.html',
  styleUrl: './job-view-dialog.scss',
})
export class JobViewDialog {
  private readonly projectRepo = inject(ProjectRepository);
  readonly data = inject<JobViewDialogData>(MAT_DIALOG_DATA);

  private readonly projects = toSignal(this.projectRepo.watchByProspect(this.data.prospectId), { initialValue: [] });
  readonly project = computed(() => this.projects().find((p) => p.id === this.data.projectId) ?? null);

  readonly workStatusColor = WORK_STATUS_COLOR;
  readonly paymentStatusLabel = PAYMENT_STATUS_LABEL;

  readonly discount = computed(() => (this.project() ? projectDiscountAmount(this.project()!) : 0));
  readonly total = computed(() => (this.project() ? projectTotal(this.project()!) : 0));
  readonly paid = computed(() => (this.project() ? projectPaidAmount(this.project()!) : 0));
  readonly balance = computed(() => (this.project() ? projectBalance(this.project()!) : 0));
  readonly paymentStatus = computed(() => (this.project() ? projectPaymentStatus(this.project()!) : 'none'));

  readonly sortedNotes = computed(() => [...(this.project()?.notes ?? [])].sort((a, b) => b.createdAt - a.createdAt));
  readonly sortedPayments = computed(() => [...(this.project()?.payments ?? [])].sort((a, b) => b.date.localeCompare(a.date)));
}
