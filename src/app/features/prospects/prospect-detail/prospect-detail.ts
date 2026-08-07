import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
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
import { ServiceConfig } from '../../../domain/models/service.model';
import { CategoryConfig } from '../../../domain/models/category.model';
import { MoneyInputDirective } from '../../../shared/directives/money-input.directive';
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
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    DatePipe,
    MoneyInputDirective,
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
  readonly services = toSignal(this.configRepo.watchServices(), { initialValue: [] as ServiceConfig[] });
  readonly categories = toSignal(this.configRepo.watchCategories(), { initialValue: [] as CategoryConfig[] });
  readonly dialCodes = DIAL_CODES;

  readonly saving = signal(false);
  readonly savingProject = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly newNoteText = signal('');
  readonly newFollowup = signal({ date: '', time: '', description: '' });

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    dialCode: [this.dialCodes[0].code, Validators.required],
    localNumber: ['', Validators.required],
    email: [''],
    website: [''],
    instagram: [''],
    facebook: [''],
    tiktok: [''],
    youtube: [''],
    linkedin: [''],
    locality: [''],
    category: [''],
    statusId: [''],
    serviceId: [{ value: '', disabled: true }],
    favorite: [false],
  });

  // La categoría puede venir de antes de que existiera el catálogo (texto libre
  // viejo) o no estar dada de alta todavía — se muestra "sugerida" en vez de
  // perderse en silencio si no matchea ningún nombre del catálogo.
  private readonly categoryValue = toSignal(this.form.controls.category.valueChanges, {
    initialValue: this.form.controls.category.value,
  });
  readonly suggestedCategory = computed(() => {
    const value = this.categoryValue();
    if (!value) return null;
    return this.categories().some((c) => c.name === value) ? null : value;
  });

  private readonly statusIdValue = toSignal(this.form.controls.statusId.valueChanges, {
    initialValue: this.form.controls.statusId.value,
  });

  /** El estado elegido en este momento en el form (no necesariamente guardado
   * todavía) — para saber si el campo Servicio debe estar habilitado. */
  readonly currentStatus = () => this.statuses().find((s) => s.id === this.statusIdValue());

  readonly projectForm = this.fb.nonNullable.group({
    serviceId: [''],
    status: ['Activo'],
    dueDate: [''],
    deposit: [0],
    balance: [0],
    domain: [''],
    hosting: [''],
    observations: [''],
  });

  constructor() {
    // Solo repatchea si el form no tiene cambios sin guardar — no queremos pisar
    // lo que el usuario está tipeando si llega una actualización en vivo de RTDB.
    effect(() => {
      const p = this.prospect();
      const project = this.projects()[0];
      if (p && !this.form.dirty) {
        const { dialCode, localNumber } = splitPhone(p.phone);
        this.form.patchValue(
          {
            name: p.name,
            dialCode,
            localNumber,
            email: p.email ?? '',
            website: p.website ?? '',
            instagram: p.instagram ?? '',
            facebook: p.facebook ?? '',
            tiktok: p.tiktok ?? '',
            youtube: p.youtube ?? '',
            linkedin: p.linkedin ?? '',
            locality: p.locality ?? '',
            category: p.category ?? '',
            statusId: p.statusId ?? '',
            serviceId: project?.serviceId ?? '',
            favorite: p.favorite,
          },
          { emitEvent: false },
        );
      }
    });

    // Campo Servicio: habilitado y obligatorio solo si el estado elegido lo
    // pide (Configuración → Estados → "Requiere servicio"). Para cualquier
    // otro estado queda deshabilitado y se limpia.
    effect(() => {
      const requiresService = !!this.currentStatus()?.requiresService;
      const control = this.form.controls.serviceId;
      if (requiresService) {
        if (control.disabled) control.enable({ emitEvent: false });
      } else if (control.enabled) {
        control.setValue('', { emitEvent: false });
        control.disable({ emitEvent: false });
      }
    });

    // Mismo criterio que el form General: no pisar lo que el usuario está
    // editando si llega una actualización en vivo de RTDB.
    effect(() => {
      const project = this.projects()[0];
      if (project && !this.projectForm.dirty) {
        this.projectForm.patchValue(
          {
            serviceId: project.serviceId ?? '',
            status: project.status,
            dueDate: project.dueDate ?? '',
            deposit: project.deposit ?? 0,
            balance: project.balance ?? 0,
            domain: project.domain ?? '',
            hosting: project.hosting ?? '',
            observations: project.observations ?? '',
          },
          { emitEvent: false },
        );
      }
    });
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
    const status = this.statuses().find((s) => s.id === value.statusId);

    if (status?.requiresService && !value.serviceId) {
      this.errorMessage.set('Este estado requiere elegir un servicio antes de guardar.');
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);
    try {
      const { dialCode, localNumber, serviceId, ...rest } = value;
      await this.prospectRepo.update(this.id(), {
        ...rest,
        phone: joinPhone(dialCode, localNumber),
        normalizedName: normalizeName(value.name),
      });
      await this.historyRepo.log(this.id(), HistoryEventType.Edited, {});

      // Cualquier estado "en serio" (isWon, o requiresService) necesita Proyecto
      // para poder trackear plata — se crea acá si hace falta, y si el campo
      // Servicio quedó cargado, se le asigna.
      if (status?.isWon || status?.requiresService) {
        await this.ensureProjectAndService(serviceId);
      }

      this.form.markAsPristine();
    } finally {
      this.saving.set(false);
    }
  }

  /** Crea el Proyecto si todavía no existe, y si vino un servicio elegido, lo
   * copia ahí (nombre + precio de ese momento, no una referencia viva al catálogo). */
  private async ensureProjectAndService(serviceId: string): Promise<void> {
    let projectId = this.projects()[0]?.id;
    if (!projectId) {
      projectId = await this.projectRepo.create({
        prospectId: this.id(),
        startDate: new Date().toISOString().slice(0, 10),
        status: 'Activo',
      });
      await this.historyRepo.log(this.id(), HistoryEventType.ProjectCreated, { projectId });
    }

    if (!serviceId) return;
    const service = this.services().find((s) => s.id === serviceId);
    if (!service) return;

    await this.projectRepo.update(projectId, {
      serviceId: service.id,
      serviceName: service.name,
      servicePrice: service.price,
    });
    await this.historyRepo.log(this.id(), HistoryEventType.ServiceAssigned, { serviceId: service.id, serviceName: service.name });
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
        void this.whatsapp.openWithTemplate(prospect, template);
      });
  }

  /** No guarda directo — solo precarga el estado "Cliente" en el form General
   * (donde el campo Servicio se habilita/obliga solo) para que el usuario lo
   * revise y confirme con "Guardar cambios", igual que cualquier otro cambio. */
  convertToClient(): void {
    const wonStatus = this.statuses().find((s) => s.isWon);
    if (!wonStatus) return;
    this.form.controls.statusId.setValue(wonStatus.id);
    this.form.markAsDirty();
  }

  async saveProject(): Promise<void> {
    const project = this.projects()[0];
    if (!project) return;

    this.savingProject.set(true);
    try {
      const value = this.projectForm.getRawValue();
      const service = this.services().find((s) => s.id === value.serviceId);
      await this.projectRepo.update(project.id, {
        serviceId: value.serviceId || undefined,
        serviceName: service?.name,
        servicePrice: service?.price,
        status: value.status,
        dueDate: value.dueDate || undefined,
        deposit: value.deposit,
        balance: value.balance,
        domain: value.domain || undefined,
        hosting: value.hosting || undefined,
        observations: value.observations || undefined,
      });
      this.projectForm.markAsPristine();
    } finally {
      this.savingProject.set(false);
    }
  }
}
