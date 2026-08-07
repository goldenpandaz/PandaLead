import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { HistoryEventType } from '../../../domain/enums/history-event-type.enum';
import { DuplicateCandidate } from '../../../domain/models/duplicate-candidate.model';
import { Prospect } from '../../../domain/models/prospect.model';
import { Project } from '../../../domain/models/project.model';
import { StatusConfig } from '../../../domain/models/status.model';
import { CaptureRepository } from '../../../data/repositories/capture.repository';
import { ConfigRepository } from '../../../data/repositories/config.repository';
import { HistoryRepository } from '../../../data/repositories/history.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { DuplicateDetectionService } from '../../../data/duplicate-detection.service';
import { DIAL_CODES } from '../../../shared/constants/dial-codes';
import { normalizeName } from '../../../shared/utils/normalize.util';
import { joinPhone, splitPhone } from '../../../shared/utils/phone.util';
import { ImageCaptureService } from '../../ocr/image-capture.service';
import { OcrService } from '../../ocr/ocr.service';
import { ParserRegistryService } from '../../ocr/parsers/parser-registry.service';

type Step = 'capture' | 'source' | 'processing' | 'preview';

/** Data opcional para abrir el diálogo saltando la captura (ej. "Nuevo cliente"
 * — cargás gente que ya conocés de WhatsApp Business, sin screenshot). */
export interface ProspectCaptureData {
  skipCapture?: boolean;
  presetStatusId?: string;
}

/**
 * El flujo completo del brief: pegar/arrastrar/elegir imagen → elegir origen →
 * OCR → parser → vista previa editable → duplicados → guardar. Nunca autoguarda.
 * Ver .docs/architecture.md §9.
 */
@Component({
  selector: 'app-prospect-capture',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  templateUrl: './prospect-capture.html',
  styleUrl: './prospect-capture.scss',
})
export class ProspectCapture {
  private readonly dialogRef = inject(MatDialogRef<ProspectCapture>);
  private readonly imageCapture = inject(ImageCaptureService);
  private readonly ocr = inject(OcrService);
  private readonly parserRegistry = inject(ParserRegistryService);
  private readonly prospectRepo = inject(ProspectRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly captureRepo = inject(CaptureRepository);
  private readonly historyRepo = inject(HistoryRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly dedup = inject(DuplicateDetectionService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly dialogData = inject<ProspectCaptureData | null>(MAT_DIALOG_DATA, { optional: true });

  readonly sources = Object.values(CaptureSource);
  readonly dialCodes = DIAL_CODES;

  readonly step = signal<Step>('capture');
  readonly imageUrl = signal<string | null>(null);
  private imageFile: File | null = null;

  readonly ocrText = signal('');
  readonly duplicates = signal<DuplicateCandidate[]>([]);
  readonly saving = signal(false);
  readonly errorMessage = signal<string | null>(null);

  private selectedSource: CaptureSource | null = null;

  readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] });
  readonly categories = toSignal(this.configRepo.watchCategories(), { initialValue: [] });
  readonly services = toSignal(this.configRepo.watchServices(), { initialValue: [] });
  private readonly existingProspects = toSignal(this.prospectRepo.watchAll(), { initialValue: [] as Prospect[] });

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
  });

  private readonly statusIdValue = toSignal(this.form.controls.statusId.valueChanges, {
    initialValue: this.form.controls.statusId.value,
  });

  /** El estado elegido en este momento, para saber si requiere servicio —
   * usado tanto acá como en el template (mensaje de ayuda del campo). */
  readonly currentStatus = () => this.statuses().find((s) => s.id === this.statusIdValue());

  constructor() {
    // Recalcula duplicados mientras el usuario edita el preview — no solo al pegar.
    this.form.valueChanges.pipe(debounceTime(400), takeUntilDestroyed()).subscribe(() => this.runDuplicateCheck());

    if (this.dialogData?.presetStatusId) {
      this.form.patchValue({ statusId: this.dialogData.presetStatusId });
    }
    if (this.dialogData?.skipCapture) {
      this.step.set('preview');
    }

    // Sin preset explícito (ej. "Nuevo cliente"), precarga el primer estado del
    // embudo como default visible — no solo al guardar, para que el usuario vea
    // qué va a quedar. Guard por valor vacío: no pisa una elección manual posterior.
    effect(() => {
      const first = this.statuses()[0];
      if (first && !this.dialogData?.presetStatusId && !this.form.controls.statusId.value) {
        this.form.patchValue({ statusId: first.id }, { emitEvent: false });
      }
    });

    // Campo Servicio: habilitado y obligatorio solo si el estado elegido lo
    // pide (Configuración → Estados → "Requiere servicio"). Para cualquier
    // otro estado queda deshabilitado y se limpia — no tiene sentido guardar
    // un servicio "colgado" de un prospecto que ni siquiera avanzó.
    effect(() => {
      const requiresService = !!this.currentStatus()?.requiresService;
      const control = this.form.controls.serviceId;
      if (requiresService) {
        if (control.disabled) control.enable({ emitEvent: false });
      } else {
        if (control.enabled) {
          control.setValue('', { emitEvent: false });
          control.disable({ emitEvent: false });
        }
      }
    });
  }

  /** Salta directo al form vacío — para cargar gente que ya conocés (ej. tu
   * lista de WhatsApp Business), sin pasar por captura + OCR. */
  skipToManual(): void {
    this.step.set('preview');
  }

  @HostListener('document:paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    if (this.step() !== 'capture') return;
    const file = this.imageCapture.fromClipboardEvent(event);
    if (file) this.setImage(file);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (this.step() !== 'capture') return;
    const file = this.imageCapture.fromDropEvent(event);
    if (file) this.setImage(file);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = this.imageCapture.fromFileList(input.files);
    if (file) this.setImage(file);
    input.value = '';
  }

  backToCapture(): void {
    this.step.set('capture');
  }

  private setImage(file: File): void {
    this.imageFile = file;
    this.imageUrl.set(this.imageCapture.toObjectUrl(file));
    this.step.set('source');
  }

  async selectSource(source: CaptureSource): Promise<void> {
    if (!this.imageFile) return;
    this.selectedSource = source;
    this.step.set('processing');
    this.errorMessage.set(null);

    try {
      const text = await this.ocr.recognize(this.imageFile);
      this.ocrText.set(text);

      const parsed = this.parserRegistry.parse(source, text);
      const { dialCode, localNumber } = splitPhone(parsed.phone);
      const category = await this.resolveCategory(parsed.category);
      this.form.patchValue({
        name: parsed.name ?? '',
        dialCode,
        localNumber,
        email: parsed.email ?? '',
        website: parsed.website ?? '',
        instagram: parsed.instagram ?? '',
        facebook: parsed.facebook ?? '',
        tiktok: parsed.tiktok ?? '',
        youtube: parsed.youtube ?? '',
        linkedin: parsed.linkedin ?? '',
        locality: parsed.locality ?? '',
        category,
      });
      this.runDuplicateCheck();
    } catch {
      this.errorMessage.set('No se pudo leer el texto de la imagen — completá los datos a mano.');
    } finally {
      this.step.set('preview');
    }
  }

  /** Regla simple a propósito (pedido explícito: nada de adivinar parecidos):
   * si lo que sugiere el OCR coincide EXACTO (normalizado — sin mayúsculas/acentos)
   * con una categoría del catálogo, se usa esa. Si no coincide exacto con
   * ninguna — sea porque el OCR trajo ruido ("42 Pedir") o una palabra parecida
   * pero distinta ("Barbero" vs "Barbería") — cae siempre a "Sin determinar"
   * (se crea una única vez, después se reutiliza). Nunca crea categorías nuevas
   * a partir de texto de OCR. */
  private async resolveCategory(raw: string | undefined): Promise<string> {
    const value = raw?.trim();
    if (value) {
      const normalizedValue = normalizeName(value);
      const existing = this.categories().find((c) => normalizeName(c.name) === normalizedValue);
      if (existing) return existing.name;
    }

    return this.ensureCategory('Sin determinar');
  }

  private async ensureCategory(name: string): Promise<string> {
    const normalized = normalizeName(name);
    const existing = this.categories().find((c) => normalizeName(c.name) === normalized);
    if (existing) return existing.name;

    await this.configRepo.saveCategory({ name });
    return name;
  }

  private buildCandidate(): Partial<Prospect> {
    const value = this.form.getRawValue();
    const { dialCode, localNumber, serviceId, ...rest } = value;
    return { ...rest, phone: joinPhone(dialCode, localNumber), normalizedName: normalizeName(value.name) };
  }

  private runDuplicateCheck(): void {
    const value = this.form.getRawValue();
    if (!value.name && !value.localNumber) {
      this.duplicates.set([]);
      return;
    }
    this.duplicates.set(this.dedup.check(this.buildCandidate(), this.existingProspects()));
  }

  async updateExisting(candidate: DuplicateCandidate): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    try {
      const prospectId = candidate.prospectId;
      const source = this.selectedSource ?? CaptureSource.Other;

      await this.prospectRepo.update(prospectId, this.buildCandidate());
      if (this.ocrText()) {
        await this.captureRepo.save(prospectId, source, this.ocrText());
      }
      await this.historyRepo.log(prospectId, HistoryEventType.Edited, { via: 'duplicate-merge', source });

      this.dialogRef.close(prospectId);
    } catch {
      this.errorMessage.set('No se pudo actualizar. Revisá la conexión e intentá de nuevo.');
    } finally {
      this.saving.set(false);
    }
  }

  async save(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    // `statuses()` ya viene ordenado por `order` (ConfigRepository.watchStatuses) —
    // el [0] es el primer estado del embudo, sea cual sea su nombre (no hardcodeamos
    // "Nuevo"/"Posible cliente": si el usuario reordena o renombra, esto sigue andando).
    const defaultStatus = this.statuses()[0];
    const statusId = value.statusId || defaultStatus?.id || '';
    const status = this.statuses().find((s) => s.id === statusId);

    if (status?.requiresService && !value.serviceId) {
      this.errorMessage.set('Este estado requiere elegir un servicio antes de guardar.');
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    try {
      const source = this.selectedSource ?? CaptureSource.Other;
      const candidate = this.buildCandidate();

      const id = await this.prospectRepo.create({
        name: candidate.name!,
        normalizedName: candidate.normalizedName!,
        phone: candidate.phone || undefined,
        email: candidate.email || undefined,
        website: candidate.website || undefined,
        instagram: candidate.instagram || undefined,
        facebook: candidate.facebook || undefined,
        tiktok: candidate.tiktok || undefined,
        youtube: candidate.youtube || undefined,
        linkedin: candidate.linkedin || undefined,
        locality: candidate.locality || undefined,
        category: candidate.category || undefined,
        statusId,
        source,
        favorite: false,
      });

      if (this.ocrText()) {
        await this.prospectRepo.saveDetails(id, { ocrRawText: this.ocrText() });
      }

      // Carga manual (sin texto OCR): no tiene sentido crear un registro de
      // "captura" vacío — no hubo ninguna captura, solo datos tipeados a mano.
      if (this.ocrText()) {
        await this.captureRepo.save(id, source, this.ocrText());
      }
      await this.historyRepo.log(id, HistoryEventType.Created, { source, manual: !this.imageFile });

      // Cualquier estado "en serio" (isWon, isFinal, o requiresService) necesita
      // Proyecto para poder trackear plata — se crea acá si hace falta, y si el
      // campo Servicio quedó cargado (obligatorio cuando requiresService), se le asigna.
      if (status?.isWon || status?.isFinal || status?.requiresService) {
        await this.ensureProjectAndService(id, value.serviceId, status);
      }

      this.dialogRef.close(id);
    } catch {
      this.errorMessage.set('No se pudo guardar. Revisá la conexión e intentá de nuevo.');
    } finally {
      this.saving.set(false);
    }
  }

  /** Mismo criterio que `ProspectDetail.convertToClient()` — crea el Proyecto
   * si todavía no existe, y si vino un servicio elegido, lo copia ahí (nombre +
   * precio de ese momento, no una referencia viva al catálogo). Si el estado
   * ya es Final, asume que el precio del servicio ya se cobró completo. */
  private async ensureProjectAndService(prospectId: string, serviceId: string, status: StatusConfig | undefined): Promise<void> {
    const projectId = await this.projectRepo.create({
      prospectId,
      startDate: new Date().toISOString().slice(0, 10),
      status: 'Activo',
    });
    await this.historyRepo.log(prospectId, HistoryEventType.ProjectCreated, { projectId });

    if (!serviceId) return;
    const service = this.services().find((s) => s.id === serviceId);
    if (!service) return;

    const updates: Partial<Project> = { serviceId: service.id, serviceName: service.name, servicePrice: service.price };
    if (status?.isFinal && service.price) {
      updates.deposit = service.price;
    }

    await this.projectRepo.update(projectId, updates);
    await this.historyRepo.log(prospectId, HistoryEventType.ServiceAssigned, { serviceId: service.id, serviceName: service.name });
  }

  viewExisting(candidate: DuplicateCandidate): void {
    this.dialogRef.close();
    void this.router.navigate(['/prospects', candidate.prospectId]);
  }

  close(): void {
    this.dialogRef.close();
  }
}
