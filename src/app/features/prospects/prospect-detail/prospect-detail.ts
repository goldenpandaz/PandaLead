import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom, switchMap } from 'rxjs';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

import { CaptureRepository } from '../../../data/repositories/capture.repository';
import { ConfigRepository } from '../../../data/repositories/config.repository';
import { FollowupRepository } from '../../../data/repositories/followup.repository';
import { HistoryRepository } from '../../../data/repositories/history.repository';
import { NoteRepository } from '../../../data/repositories/note.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { HistoryEventType } from '../../../domain/enums/history-event-type.enum';
import { DIAL_CODES } from '../../../shared/constants/dial-codes';
import { normalizeName } from '../../../shared/utils/normalize.util';
import { joinPhone, splitPhone } from '../../../shared/utils/phone.util';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { WhatsappTemplatePicker } from '../whatsapp/whatsapp-template-picker/whatsapp-template-picker';
import { MessageTemplate } from '../../../domain/models/template.model';
import { CategoryConfig } from '../../../domain/models/category.model';
import { Project } from '../../../domain/models/project.model';
import { ConfirmDialog, ConfirmDialogData } from '../../../shared/dialogs/confirm-dialog/confirm-dialog';
import { projectBalance, projectDiscountAmount, projectPaidAmount, projectPaymentStatus, projectTotal, PAYMENT_STATUS_LABEL, WORK_STATUS_COLOR, primaryProject } from '../../../shared/utils/project-finance.util';
import { describeHistoryEvent } from '../../../shared/utils/history-event.util';
import { JobDialog, JobDialogData } from './job-dialog/job-dialog';
import { JobViewDialog, JobViewDialogData } from './job-view-dialog/job-view-dialog';
import { NotesDialog, NotesDialogData } from './notes-dialog/notes-dialog';
import { PaymentsDialog, PaymentsDialogData } from './payments-dialog/payments-dialog';
import { Followup } from '../../../domain/models/followup.model';
import { MoneyPipe } from '../../../shared/pipes/money.pipe';

@Component({
  selector: 'app-prospect-detail',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    DatePipe,
    MoneyPipe,
  ],
  templateUrl: './prospect-detail.html',
  styleUrl: './prospect-detail.scss',
})
export class ProspectDetail {
  /** Bindeado automáticamente desde `:id` de la ruta (withComponentInputBinding). */
  readonly id = input.required<string>();

  private readonly prospectRepo = inject(ProspectRepository);
  private readonly noteRepo = inject(NoteRepository);
  private readonly followupRepo = inject(FollowupRepository);
  private readonly historyRepo = inject(HistoryRepository);
  private readonly captureRepo = inject(CaptureRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly whatsapp = inject(WhatsappService);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  private readonly id$ = toObservable(this.id);

  readonly prospect = toSignal(this.id$.pipe(switchMap((id) => this.prospectRepo.watchOne(id))), { initialValue: null });
  readonly details = toSignal(this.id$.pipe(switchMap((id) => this.prospectRepo.watchDetails(id))), { initialValue: null });
  readonly notes = toSignal(this.id$.pipe(switchMap((id) => this.noteRepo.watchForProspect(id))), { initialValue: [] });
  readonly followups = toSignal(this.id$.pipe(switchMap((id) => this.followupRepo.watchForProspect(id))), { initialValue: [] });
  readonly history = toSignal(this.id$.pipe(switchMap((id) => this.historyRepo.watchForProspect(id))), { initialValue: [] });
  readonly captures = toSignal(this.id$.pipe(switchMap((id) => this.captureRepo.watchForProspect(id))), { initialValue: [] });
  readonly projects = toSignal(this.id$.pipe(switchMap((id) => this.projectRepo.watchByProspect(id))), { initialValue: [] });

  readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] });
  readonly categories = toSignal(this.configRepo.watchCategories(), { initialValue: [] as CategoryConfig[] });
  readonly dialCodes = DIAL_CODES;

  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly newNoteText = signal('');
  readonly newFollowup = signal({ date: '', time: '', description: '' });

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    dialCode: [this.dialCodes[0].code, Validators.required],
    localNumber: ['', Validators.required],
    // Validators.required falla con array vacío: mínimo una categoría.
    categories: [[] as string[], Validators.required],
    statusId: [''],
    favorite: [false],
  });

  // Las categorías pueden venir de antes de que existiera el catálogo (texto libre
  // viejo) o no estar dadas de alta todavía — se muestran "sugeridas" en vez de
  // perderse en silencio si no matchean ningún nombre del catálogo.
  private readonly categoriesValue = toSignal(this.form.controls.categories.valueChanges, {
    initialValue: this.form.controls.categories.value,
  });
  readonly suggestedCategories = computed(() => {
    const catalog = this.categories();
    // El patchValue inicial va con emitEvent:false, así que también miramos lo guardado.
    const names = new Set([...(this.prospect()?.categories ?? []), ...this.categoriesValue()]);
    return [...names].filter((name) => !catalog.some((c) => c.name === name));
  });

  private readonly statusIdValue = toSignal(this.form.controls.statusId.valueChanges, {
    initialValue: this.form.controls.statusId.value,
  });

  /** El estado elegido en este momento en el form (no necesariamente guardado
   * todavía) — para avisar si requiere al menos un trabajo. */
  readonly currentStatus = () => this.statuses().find((s) => s.id === this.statusIdValue());

  readonly workStatusColor = WORK_STATUS_COLOR;
  readonly describeEvent = describeHistoryEvent;
  readonly paymentStatusLabel = PAYMENT_STATUS_LABEL;

  /** Trabajos del cliente, el más reciente primero. */
  readonly sortedProjects = computed(() =>
    [...this.projects()].sort((a, b) => (b.startDate ?? '').localeCompare(a.startDate ?? '')),
  );

  constructor() {
    // Solo repatchea si el form no tiene cambios sin guardar — no queremos pisar
    // lo que el usuario está tipeando si llega una actualización en vivo de RTDB.
    effect(() => {
      const p = this.prospect();
      if (p && !this.form.dirty) {
        const { dialCode, localNumber } = splitPhone(p.phone);
        this.form.patchValue(
          {
            name: p.name,
            dialCode,
            localNumber,
            categories: p.categories,
            statusId: p.statusId ?? '',
            favorite: p.favorite,
          },
          { emitEvent: false },
        );
      }
    });

    // `Prospect.nextFollowupAt` es un espejo del seguimiento pendiente más
    // próximo — se recalcula solo cada vez que cambian los seguimientos
    // (agregar, completar). Sin esto quedaba como campo fantasma, nunca
    // escrito, y la columna de la tabla siempre mostraba "—".
    effect(() => {
      const pending = this.followups()
        .filter((f) => f.status === 'pending')
        .map((f) => this.followupTimestamp(f))
        .filter((ts): ts is number => ts !== null)
        .sort((a, b) => a - b);
      const next = pending[0] ?? null;
      const current = this.prospect()?.nextFollowupAt ?? null;
      if (this.prospect() && next !== current) {
        void this.prospectRepo.update(this.id(), { nextFollowupAt: next });
      }
    });
  }

  private followupTimestamp(followup: Followup): number | null {
    const date = new Date(`${followup.date}T${followup.time || '00:00'}`);
    return Number.isNaN(date.getTime()) ? null : date.getTime();
  }

  backToList(): void {
    void this.router.navigateByUrl('/prospects');
  }

  async saveGeneral(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    this.saving.set(true);
    this.errorMessage.set(null);
    try {
      const { dialCode, localNumber, ...rest } = value;
      await this.prospectRepo.update(this.id(), {
        ...rest,
        phone: joinPhone(dialCode, localNumber),
        normalizedName: normalizeName(value.name),
      });
      await this.historyRepo.log(this.id(), HistoryEventType.Edited, {});
      this.form.markAsPristine();
    } finally {
      this.saving.set(false);
    }
  }

  async addNote(): Promise<void> {
    const text = this.newNoteText().trim();
    if (!text) return;
    await this.noteRepo.add(this.id(), text);
    await this.historyRepo.log(this.id(), HistoryEventType.NoteAdded, {});
    this.newNoteText.set('');
  }

  async deleteNote(noteId: string): Promise<void> {
    await this.noteRepo.delete(this.id(), noteId);
  }

  async addFollowup(): Promise<void> {
    const { date, description } = this.newFollowup();
    if (!date || !description) return;
    await this.followupRepo.add(this.id(), this.newFollowup());
    await this.historyRepo.log(this.id(), HistoryEventType.FollowupScheduled, {});
    this.newFollowup.set({ date: '', time: '', description: '' });
  }

  async toggleFollowup(followupId: string, done: boolean): Promise<void> {
    await this.followupRepo.setStatus(this.id(), followupId, done ? 'done' : 'pending');
    if (done) await this.historyRepo.log(this.id(), HistoryEventType.FollowupCompleted, {});
  }

  openWhatsapp(): void {
    const prospect = this.prospect();
    if (!prospect?.phone) return;

    this.dialog
      .open<WhatsappTemplatePicker, void, MessageTemplate | null>(WhatsappTemplatePicker, { width: '420px' })
      .afterClosed()
      .subscribe((template) => {
        if (template === undefined) return;
        void this.whatsapp.openWithTemplate(prospect, template, primaryProject(this.projects()));
      });
  }

  // ----- Trabajos -----

  readonly total = projectTotal;
  readonly paidAmount = projectPaidAmount;
  readonly balanceOf = projectBalance;
  readonly discountOf = projectDiscountAmount;

  paidPercent(project: Project): number {
    const total = projectTotal(project);
    if (total <= 0) return projectPaidAmount(project) > 0 ? 100 : 0;
    return Math.min(100, Math.round((projectPaidAmount(project) / total) * 100));
  }

  paymentStatus(project: Project) {
    return projectPaymentStatus(project);
  }

  openJobDialog(project?: Project): void {
    this.dialog.open<JobDialog, JobDialogData, boolean>(JobDialog, {
      width: '90vw',
      maxWidth: '440px',
      data: { prospectId: this.id(), project },
    });
  }

  openJobView(project: Project): void {
    this.dialog.open<JobViewDialog, JobViewDialogData>(JobViewDialog, {
      width: '90vw',
      maxWidth: '480px',
      data: { prospectId: this.id(), projectId: project.id },
    });
  }

  openPayments(project: Project): void {
    this.dialog.open<PaymentsDialog, PaymentsDialogData>(PaymentsDialog, {
      width: '90vw',
      maxWidth: '480px',
      data: { prospectId: this.id(), projectId: project.id },
    });
  }

  openJobNotes(project: Project): void {
    this.dialog.open<NotesDialog, NotesDialogData>(NotesDialog, {
      width: '90vw',
      maxWidth: '480px',
      data: { prospectId: this.id(), projectId: project.id },
    });
  }

  async deleteJob(project: Project): Promise<void> {
    const ok = await firstValueFrom(
      this.dialog
        .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
          width: '380px',
          data: {
            title: 'Eliminar trabajo',
            message: `"${project.serviceName || 'Sin servicio'}" se borra para siempre, con sus notas${
              projectPaidAmount(project) > 0
                ? ` y sus pagos ($${projectPaidAmount(project).toLocaleString('es-CO')}, que dejarán de contar en tus ingresos)`
                : ' y sus pagos'
            }. Esta acción no se puede deshacer.`,
            confirmLabel: 'Eliminar',
            danger: true,
            icon: 'delete',
          },
        })
        .afterClosed(),
    );
    if (ok) await this.projectRepo.delete(project.id);
  }
}
