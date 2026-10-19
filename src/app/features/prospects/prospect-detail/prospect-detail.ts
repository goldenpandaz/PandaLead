import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom, switchMap } from 'rxjs';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';

import { ConfigRepository } from '../../../data/repositories/config.repository';
import { FollowupRepository } from '../../../data/repositories/followup.repository';
import { HistoryRepository } from '../../../data/repositories/history.repository';
import { NoteRepository } from '../../../data/repositories/note.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { HistoryEventType } from '../../../domain/enums/history-event-type.enum';
import { DIAL_CODES } from '../../../shared/constants/dial-codes';
import { formatIsoDate, formatTime, parseIsoDate, parseTime } from '../../../shared/utils/date-input.util';
import { normalizeName } from '../../../shared/utils/normalize.util';
import { joinPhone, normalizeWhatsappUser, splitPhone } from '../../../shared/utils/phone.util';
import { phoneOrWhatsappUser } from '../../../shared/utils/contact.validator';
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

/** Borrador de seguimiento con `Date` para los pickers; se convierte a strings al guardar. */
interface FollowupDraft {
  date: Date | null;
  time: Date | null;
  description: string;
}

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
    MatDatepickerModule,
    MatTimepickerModule,
    MatTooltipModule,
    DatePipe,
    MoneyPipe,
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'es-CO' }],
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
  private readonly historyEvents = toSignal(this.id$.pipe(switchMap((id) => this.historyRepo.watchForProspect(id))), { initialValue: [] });
  /** Más reciente primero. */
  readonly history = computed(() => [...this.historyEvents()].sort((a, b) => b.createdAt - a.createdAt));
  readonly projects = toSignal(this.id$.pipe(switchMap((id) => this.projectRepo.watchByProspect(id))), { initialValue: [] });

  readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] });
  readonly categories = toSignal(this.configRepo.watchCategories(), { initialValue: [] as CategoryConfig[] });
  readonly dialCodes = DIAL_CODES;

  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly newNoteText = signal('');
  readonly editingNoteId = signal<string | null>(null);
  readonly editingNoteText = signal('');
  readonly newFollowup = signal<FollowupDraft>({ date: null, time: null, description: '' });
  readonly editingFollowupId = signal<string | null>(null);
  readonly editingFollowup = signal<FollowupDraft>({ date: null, time: null, description: '' });

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    dialCode: [this.dialCodes[0].code, Validators.required],
    localNumber: [''],
    whatsappUser: [''],
    // Validators.required falla con array vacío: mínimo una categoría.
    categories: [[] as string[], Validators.required],
    statusId: [''],
    favorite: [false],
  }, { validators: phoneOrWhatsappUser });

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
            whatsappUser: p.whatsappUser ?? '',
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
      const { dialCode, localNumber, whatsappUser, ...rest } = value;
      await this.prospectRepo.update(this.id(), {
        ...rest,
        phone: joinPhone(dialCode, localNumber),
        whatsappUser: normalizeWhatsappUser(whatsappUser) || null,
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

  startEditNote(noteId: string, text: string): void {
    this.editingNoteId.set(noteId);
    this.editingNoteText.set(text);
  }

  cancelEditNote(): void {
    this.editingNoteId.set(null);
    this.editingNoteText.set('');
  }

  async saveEditNote(): Promise<void> {
    const noteId = this.editingNoteId();
    const text = this.editingNoteText().trim();
    if (!noteId || !text) return;
    await this.noteRepo.update(this.id(), noteId, text);
    this.cancelEditNote();
  }

  async deleteNote(noteId: string): Promise<void> {
    const ok = await firstValueFrom(
      this.dialog
        .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
          width: '380px',
          data: {
            title: 'Eliminar nota',
            message: 'La nota se borra para siempre. Esta acción no se puede deshacer.',
            confirmLabel: 'Eliminar',
            danger: true,
            icon: 'delete',
          },
        })
        .afterClosed(),
    );
    if (!ok) return;
    await this.noteRepo.delete(this.id(), noteId);
  }

  async addFollowup(): Promise<void> {
    const { date, time, description } = this.newFollowup();
    const isoDate = formatIsoDate(date);
    if (!isoDate || !description.trim()) return;
    await this.followupRepo.add(this.id(), { date: isoDate, time: formatTime(time) ?? '', description: description.trim() });
    await this.historyRepo.log(this.id(), HistoryEventType.FollowupScheduled, {});
    this.newFollowup.set({ date: null, time: null, description: '' });
  }

  startEditFollowup(followup: Followup): void {
    this.editingFollowupId.set(followup.id);
    this.editingFollowup.set({ date: parseIsoDate(followup.date), time: parseTime(followup.time), description: followup.description });
  }

  cancelEditFollowup(): void {
    this.editingFollowupId.set(null);
  }

  async saveEditFollowup(): Promise<void> {
    const followupId = this.editingFollowupId();
    const { date, time, description } = this.editingFollowup();
    const isoDate = formatIsoDate(date);
    if (!followupId || !isoDate || !description.trim()) return;
    await this.followupRepo.update(this.id(), followupId, { date: isoDate, time: formatTime(time) ?? '', description: description.trim() });
    this.cancelEditFollowup();
  }

  async deleteFollowup(followupId: string): Promise<void> {
    const ok = await firstValueFrom(
      this.dialog
        .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
          width: '380px',
          data: {
            title: 'Eliminar seguimiento',
            message: 'El seguimiento se borra para siempre. Esta acción no se puede deshacer.',
            confirmLabel: 'Eliminar',
            danger: true,
            icon: 'delete',
          },
        })
        .afterClosed(),
    );
    if (!ok) return;
    await this.followupRepo.delete(this.id(), followupId);
  }

  async toggleFollowup(followupId: string, done: boolean): Promise<void> {
    await this.followupRepo.setStatus(this.id(), followupId, done ? 'done' : 'pending');
    if (done) await this.historyRepo.log(this.id(), HistoryEventType.FollowupCompleted, {});
  }

  openWhatsapp(): void {
    const prospect = this.prospect();
    if (!prospect || (!prospect.phone && !prospect.whatsappUser)) return;

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
