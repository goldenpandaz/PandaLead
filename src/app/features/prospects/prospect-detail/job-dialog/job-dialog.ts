import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ConfigRepository } from '../../../../data/repositories/config.repository';
import { HistoryRepository } from '../../../../data/repositories/history.repository';
import { ProjectRepository } from '../../../../data/repositories/project.repository';
import { HistoryEventType } from '../../../../domain/enums/history-event-type.enum';
import { Project, WORK_STATUSES } from '../../../../domain/models/project.model';
import { ServiceConfig } from '../../../../domain/models/service.model';
import { MoneyPipe } from '../../../../shared/pipes/money.pipe';
import { formatIsoDate, parseIsoDate } from '../../../../shared/utils/date-input.util';
import { projectDiscountAmount, projectTotal } from '../../../../shared/utils/project-finance.util';

export interface JobDialogData {
  prospectId: string;
  /** Si viene, el diálogo edita ese trabajo; si no, crea uno nuevo. */
  project?: Project;
}

@Component({
  selector: 'app-job-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MoneyPipe,
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'es-CO' }],
  templateUrl: './job-dialog.html',
  styleUrl: './job-dialog.scss',
})
export class JobDialog {
  private readonly dialogRef = inject(MatDialogRef<JobDialog, boolean>);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly historyRepo = inject(HistoryRepository);
  private readonly configRepo = inject(ConfigRepository);
  readonly data = inject<JobDialogData>(MAT_DIALOG_DATA);

  readonly workStatuses = WORK_STATUSES;
  readonly services = toSignal(this.configRepo.watchServices(), { initialValue: [] as ServiceConfig[] });
  readonly saving = signal(false);

  private readonly editing = this.data.project;
  readonly isEdit = !!this.editing;

  readonly serviceId = signal(this.editing?.serviceId ?? '');
  readonly discountType = signal<'fixed' | 'percentage'>(this.editing?.discountType ?? 'percentage');
  readonly discountValue = signal<number>(this.editing?.discountValue ?? 0);
  readonly status = signal(this.editing?.status ?? 'Pendiente');
  readonly dueDate = signal<Date | null>(parseIsoDate(this.editing?.dueDate));
  readonly observations = signal(this.editing?.observations ?? '');

  private readonly selectedService = computed(() => this.services().find((s) => s.id === this.serviceId()));

  /** Precio: el del catálogo si hay servicio elegido; si el servicio ya no existe en el
   * catálogo, el copiado al trabajo. */
  private readonly price = computed(() => {
    const service = this.selectedService();
    if (service) return service.price ?? 0;
    return this.editing && this.editing.serviceId === this.serviceId() ? (this.editing.servicePrice ?? 0) : 0;
  });

  readonly discountDisplay = computed(() => {
    if (!this.serviceId()) return null;
    const servicePrice = this.price();
    const probe = { servicePrice, discountType: this.discountType(), discountValue: Number(this.discountValue()) || 0, payments: [] };
    return { price: servicePrice, amount: projectDiscountAmount(probe), total: projectTotal(probe) };
  });

  async save(): Promise<void> {
    if (this.saving()) return;
    this.saving.set(true);
    try {
      const service = this.selectedService();
      const serviceId = this.serviceId();
      const discountValue = this.discountValue() || 0;
      const hasDiscount = !!serviceId && discountValue > 0;
      const dueDate = formatIsoDate(this.dueDate());
      const observations = this.observations().trim() || undefined;

      if (this.editing) {
        const serviceChanged = serviceId !== (this.editing.serviceId ?? '');
        const serviceFields = !serviceId
          ? { serviceId: null, serviceName: null, servicePrice: null }
          : service && serviceChanged
            ? { serviceId: service.id, serviceName: service.name, servicePrice: service.price ?? null }
            : {};
        // `null` borra el campo en RTDB; `undefined` no.
        await this.projectRepo.update(this.editing.id, {
          status: this.status(),
          dueDate: dueDate ?? null,
          observations: observations ?? null,
          discountType: hasDiscount ? this.discountType() : null,
          discountValue: hasDiscount ? discountValue : null,
          ...serviceFields,
        });
        if (serviceId && serviceChanged && service) {
          await this.historyRepo.log(this.data.prospectId, HistoryEventType.ServiceAssigned, { serviceId: service.id, serviceName: service.name });
        }
      } else {
        const id = await this.projectRepo.create({
          prospectId: this.data.prospectId,
          startDate: formatIsoDate(new Date())!,
          status: this.status(),
          payments: [],
          notes: [],
          ...(dueDate ? { dueDate } : {}),
          ...(observations ? { observations } : {}),
          ...(hasDiscount ? { discountType: this.discountType(), discountValue } : {}),
          ...(service ? { serviceId: service.id, serviceName: service.name, ...(service.price != null ? { servicePrice: service.price } : {}) } : {}),
        });
        await this.historyRepo.log(this.data.prospectId, HistoryEventType.ProjectCreated, { projectId: id });
        if (service) {
          await this.historyRepo.log(this.data.prospectId, HistoryEventType.ServiceAssigned, { serviceId: service.id, serviceName: service.name });
        }
      }
      this.dialogRef.close(true);
    } finally {
      this.saving.set(false);
    }
  }
}
