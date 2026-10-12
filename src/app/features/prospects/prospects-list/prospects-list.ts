import { Component, computed, effect, inject, signal, viewChild } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom, startWith, switchMap } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { PhonePipe } from '../../../core/pipes/phone.pipe';

import { ProspectCapture, ProspectCaptureData } from '../prospect-capture/prospect-capture';
import { ProspectImportDialog } from '../prospect-import-dialog/prospect-import-dialog';
import { ProspectEditService } from '../prospect-edit-dialog/prospect-edit.service';
import { WhatsappTemplatePicker } from '../whatsapp/whatsapp-template-picker/whatsapp-template-picker';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { ConfirmDialog, ConfirmDialogData } from '../../../shared/dialogs/confirm-dialog/confirm-dialog';
import { MessageTemplate } from '../../../domain/models/template.model';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { ConfigRepository } from '../../../data/repositories/config.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { AuthService } from '../../../core/auth/auth.service';
import { Prospect } from '../../../domain/models/prospect.model';
import { Project } from '../../../domain/models/project.model';
import { StatusConfig } from '../../../domain/models/status.model';
import { CategoryConfig } from '../../../domain/models/category.model';
import { NO_SERVICE_LABEL, PAYMENT_STATUS_LABEL, describeJobsLoss, primaryProject, projectPaymentStatus } from '../../../shared/utils/project-finance.util';
import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { prospectsToCsv, prospectsToMarkdown } from '../../../shared/utils/prospect-export.util';
import { exportProspectsToExcel } from '../../../shared/utils/excel-export.util';

/** Vista rápida para el día a día: lo mínimo para reconocer, contactar y
 * mover de estado un prospecto sin abrir la ficha. Sin "Creado" acá — no
 * amerita espacio en la vista rápida, sí en la Detallada. */
const SIMPLE_COLUMNS = ['select', 'favorite', 'name', 'phone', 'category', 'statusId', 'service', 'actions'] as const;

/** Orden fijo de columnas de la vista Detallada. Las "core" siempre se
 * muestran; las demás son configurables por el usuario (se persiste en
 * localStorage). */
const DETAILED_COLUMN_ORDER = [
  'select',
  'favorite',
  'name',
  'category',
  'phone',
  'statusId',
  'service',
  'discount',
  'source',
  'createdAt',
  'lastContactAt',
  'nextFollowupAt',
  'actions',
] as const;

const CORE_DETAILED_COLUMNS = new Set(['select', 'favorite', 'name', 'phone', 'statusId', 'service', 'actions']);

const OPTIONAL_COLUMNS = [
  { key: 'category', label: 'Categoría' },
  { key: 'source', label: 'Fuente' },
  { key: 'createdAt', label: 'Creado' },
  { key: 'lastContactAt', label: 'Último contacto' },
  { key: 'nextFollowupAt', label: 'Próximo seguimiento' },
] as const;

const COLUMNS_STORAGE_KEY = 'pandalead.prospects.visibleColumns';
const FILTERS_STORAGE_KEY = 'pandalead.prospects.filters';

@Component({
  selector: 'app-prospects-list',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    DatePipe,
    PhonePipe,
  ],
  templateUrl: './prospects-list.html',
  styleUrl: './prospects-list.scss',
})
export class ProspectsList {
  private readonly prospectRepo = inject(ProspectRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly prospectEdit = inject(ProspectEditService);
  private readonly auth = inject(AuthService);
  private readonly dialog = inject(MatDialog);
  private readonly whatsapp = inject(WhatsappService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  private readonly sort = viewChild.required(MatSort);
  private readonly paginator = viewChild.required(MatPaginator);

  private longPressTimer: any;
  private longPressDuration = 500; // ms

  readonly viewMode = signal<'simple' | 'detailed'>('simple');
  readonly optionalColumns = OPTIONAL_COLUMNS;

  readonly visibleColumns = signal<Set<string>>(this.loadVisibleColumns());

  readonly hasSelections = computed(() => this.selection.selected.length > 0);

  readonly columns = computed(() => {
    const base = this.viewMode() === 'simple'
      ? [...SIMPLE_COLUMNS]
      : DETAILED_COLUMN_ORDER.filter((col) => CORE_DETAILED_COLUMNS.has(col) || this.visibleColumns().has(col));

    // Ocultar columna "select" solo si no hay selecciones
    return this.hasSelections()
      ? base
      : base.filter(col => col !== 'select');
  });

  private loadVisibleColumns(): Set<string> {
    try {
      const raw = localStorage.getItem(COLUMNS_STORAGE_KEY);
      if (raw) return new Set(JSON.parse(raw) as string[]);
    } catch {
      // localStorage corrupto o no disponible — arrancamos con todas visibles.
    }
    return new Set(OPTIONAL_COLUMNS.map((c) => c.key));
  }

  private loadFilters(): { search: string; statusFilter: string | null; categoryFilter: string | null; favoritesOnly: boolean } {
    try {
      const raw = localStorage.getItem(FILTERS_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      // localStorage corrupto o no disponible
    }
    return { search: '', statusFilter: null, categoryFilter: null, favoritesOnly: false };
  }

  private saveFilters(): void {
    const filters = {
      search: this.search(),
      statusFilter: this.statusFilter(),
      categoryFilter: this.categoryFilter(),
      favoritesOnly: this.favoritesOnly(),
    };
    localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
  }

  toggleColumn(key: string): void {
    const current = new Set(this.visibleColumns());
    if (current.has(key)) current.delete(key);
    else current.add(key);
    this.visibleColumns.set(current);
    localStorage.setItem(COLUMNS_STORAGE_KEY, JSON.stringify([...current]));
  }

  // --- datos en vivo ---
  // Recrea el observable de prospects cada vez que el usuario cambia (switchMap)
  // Esto previene que se emita caché stale cuando el usuario inicia sesión
  private readonly prospects = toSignal(
    toObservable(this.auth.currentUser).pipe(
      switchMap(() =>
        this.prospectRepo.watchAll().pipe(
          startWith(null), // null = loading, [] = loaded (posiblemente vacío)
        )
      ),
    ),
    { initialValue: null as Prospect[] | null },
  );
  readonly isLoadingProspects = computed(() => this.prospects() === null);
  readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] as StatusConfig[] });
  readonly categories = toSignal(this.configRepo.watchCategories(), { initialValue: [] as CategoryConfig[] });
  private readonly projects = toSignal(this.projectRepo.watchAll(), { initialValue: [] as Project[] });

  private readonly statusById = computed(() => new Map(this.statuses().map((s) => [s.id, s])));
  private readonly projectsByProspectId = computed(() => {
    const map = new Map<string, Project[]>();
    for (const p of this.projects()) {
      const list = map.get(p.prospectId);
      if (list) list.push(p);
      else map.set(p.prospectId, [p]);
    }
    return map;
  });

  // --- filtros ---
  private readonly savedFilters = this.loadFilters();
  readonly search = signal(this.savedFilters.search);
  readonly statusFilter = signal<string | null>(this.savedFilters.statusFilter);
  readonly categoryFilter = signal<string | null>(this.savedFilters.categoryFilter);
  readonly favoritesOnly = signal(this.savedFilters.favoritesOnly);

  // --- filtros avanzados (panel aparte, no saturan la barra principal) ---
  readonly hasPhoneFilter = signal(false);
  readonly dateFrom = signal('');
  readonly dateTo = signal('');

  readonly advancedFiltersActive = computed(
    () => this.hasPhoneFilter() || !!this.dateFrom() || !!this.dateTo(),
  );

  resetAdvancedFilters(event?: Event): void {
    event?.stopPropagation();
    this.hasPhoneFilter.set(false);
    this.dateFrom.set('');
    this.dateTo.set('');
  }

  readonly filtered = computed(() => {
    const prospectsData = this.prospects();
    if (prospectsData === null) return []; // Aún cargando datos de Firebase

    const term = this.search().trim().toLowerCase();
    const status = this.statusFilter();
    const category = this.categoryFilter();
    const onlyFavorites = this.favoritesOnly();
    const needsPhone = this.hasPhoneFilter();
    const fromMs = this.dateFrom() ? new Date(this.dateFrom()).getTime() : null;
    // +1 día - 1ms: el filtro "hasta" incluye todo ese día, no solo la medianoche.
    const toMs = this.dateTo() ? new Date(this.dateTo()).getTime() + 86_400_000 - 1 : null;

    return prospectsData.filter((p) => {
      if (p.archived) return false;
      if (status && p.statusId !== status) return false;
      if (category && !p.categories.includes(category)) return false;
      if (onlyFavorites && !p.favorite) return false;
      if (needsPhone && !p.phone) return false;
      if (fromMs != null && p.createdAt < fromMs) return false;
      if (toMs != null && p.createdAt > toMs) return false;
      if (term) {
        const haystack = `${p.name} ${p.phone ?? ''} ${p.categories.join(' ')}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }
      return true;
    });
  });

  readonly dataSource = new MatTableDataSource<Prospect>([]);
  readonly selection = new SelectionModel<Prospect>(true, []);

  constructor() {
    void this.configRepo.seedDefaultStatusesIfEmpty();
    void this.configRepo.seedDefaultTemplatesIfEmpty();

    this.dataSource.sortingDataAccessor = (p, column) =>
      column === 'category'
        ? p.categories.join(', ').toLowerCase()
        : ((p as unknown as Record<string, string | number | undefined>)[column] ?? '');

    effect(() => {
      this.dataSource.data = this.filtered();
    });

    effect(() => {
      this.dataSource.sort = this.sort();
      this.dataSource.paginator = this.paginator();
    });

    effect(() => {
      this.search();
      this.statusFilter();
      this.categoryFilter();
      this.favoritesOnly();
      this.saveFilters();
    });
  }

  openEditDialog(prospect: Prospect, event?: Event): void {
    event?.stopPropagation();
    this.prospectEdit.edit(prospect);
  }

  openDetail(prospect: Prospect, event?: Event): void {
    event?.stopPropagation();
    void this.router.navigate(['/prospects', prospect.id]);
  }

  openCapture(): void {
    this.dialog.open(ProspectCapture, {
      width: '90vw',
      maxWidth: '440px',
      autoFocus: false,
    });
  }

  /** Carga rápida sin captura/OCR — para tipear datos a mano (ej. tu lista de
   * WhatsApp Business). El Estado arranca en "Posible cliente" como cualquier
   * otro alta, no se fuerza a "Cliente": lo elegís vos si ya sabés que lo es. */
  openNewClient(): void {
    this.dialog.open<ProspectCapture, ProspectCaptureData>(ProspectCapture, {
      width: '90vw',
      maxWidth: '440px',
      autoFocus: false,
      data: { skipCapture: true },
    });
  }

  openImport(): void {
    this.dialog
      .open<ProspectImportDialog>(ProspectImportDialog, {
        width: '90vw',
        maxWidth: '800px',
        autoFocus: false,
      })
      .afterClosed()
      .subscribe((summary) => {
        if (!summary) return;

        const parts: string[] = [];
        if (summary.created > 0) {
          parts.push(`${summary.created} nuevo${summary.created !== 1 ? 's' : ''}`);
        }
        if (summary.duplicates > 0) {
          parts.push(`${summary.duplicates} actualizado${summary.duplicates !== 1 ? 's' : ''}`);
        }
        if (summary.skipped > 0) {
          parts.push(`${summary.skipped} omitido${summary.skipped !== 1 ? 's' : ''}`);
        }

        const message = parts.length > 0 ? parts.join(', ') + ' — importación completada.' : 'Importación completada.';
        this.snackBar.open(message, 'Cerrar', { duration: 5000 });
      });
  }

  statusOf(prospect: Prospect): StatusConfig | undefined {
    return this.statusById().get(prospect.statusId);
  }

  projectsOf(prospect: Prospect): Project[] {
    return this.projectsByProspectId().get(prospect.id) ?? [];
  }

  /** Servicio del primer trabajo + ` +N` si hay más. */
  serviceLabelOf(prospect: Prospect): string {
    const projects = this.projectsOf(prospect);
    if (projects.length === 0) return NO_SERVICE_LABEL;
    const first = projects[0].serviceName || NO_SERVICE_LABEL;
    return projects.length > 1 ? `${first} +${projects.length - 1}` : first;
  }

  /** Falso cuando no hay ningún servicio que mostrar (se pinta atenuado y en cursiva). */
  hasServiceLabel(prospect: Prospect): boolean {
    return !!this.projectsOf(prospect)[0]?.serviceName;
  }

  /** Tooltip: un renglón por trabajo con su estado de pago. */
  servicesTooltipOf(prospect: Prospect): string {
    return this.projectsOf(prospect)
      .map((p) => `${p.serviceName || 'Sin servicio'} — ${PAYMENT_STATUS_LABEL[projectPaymentStatus(p)]}`)
      .join('\n');
  }

  discountOf(prospect: Prospect): string | undefined {
    const project = this.projectsOf(prospect).find((p) => !!p.discountValue);
    if (!project) return undefined;
    return project.discountType === 'fixed' ? `$${project.discountValue}` : `${project.discountValue}%`;
  }

  /** Edición en línea — cambiar categoría o estado no debería obligarte a
   * entrar a la ficha completa. */
  updateCategories(prospect: Prospect, categories: string[], select: MatSelect): void {
    if (categories.length === 0) {
      // Mínimo una categoría: revertimos el select visualmente a lo guardado.
      select.value = prospect.categories;
      return;
    }
    const unchanged =
      categories.length === prospect.categories.length && categories.every((c) => prospect.categories.includes(c));
    if (unchanged) return;
    void this.prospectRepo.update(prospect.id, { categories });
  }

  private confirmDialog(data: ConfirmDialogData): Promise<boolean> {
    return firstValueFrom(this.dialog.open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, { data, width: '380px' }).afterClosed()).then(
      (result) => !!result,
    );
  }

  /** Un Estado que requiere servicio (`requiresService`) exige que el cliente
   * ya tenga al menos un trabajo — se cargan desde la ficha. */
  async updateStatus(prospect: Prospect, statusId: string, select?: MatSelect): Promise<void> {
    if (statusId === prospect.statusId) return;

    const newStatus = this.statusById().get(statusId);
    if (newStatus?.requiresService && this.projectsOf(prospect).length === 0) {
      if (select) select.value = prospect.statusId;
      this.snackBar.open('Agregá un trabajo primero (Ver → Trabajos).', 'Cerrar', { duration: 4000 });
      return;
    }

    await this.prospectRepo.update(prospect.id, { statusId });
  }

  toggleFavorite(prospect: Prospect, event: Event): void {
    event.stopPropagation();
    void this.prospectRepo.setFavorite(prospect.id, !prospect.favorite);
  }

  toggleAllSelection(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.data);
    }
  }

  onRowMouseDown(row: Prospect): void {
    this.longPressTimer = setTimeout(() => {
      if (!this.selection.isSelected(row)) {
        this.selection.select(row);
      }
    }, this.longPressDuration);
  }

  onRowMouseUp(): void {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  onRowMouseLeave(): void {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length && this.dataSource.data.length > 0;
  }

  openWhatsapp(prospect: Prospect, event: Event): void {
    event.stopPropagation();
    if (!prospect.phone) return;

    this.dialog
      .open<WhatsappTemplatePicker, void, MessageTemplate | null>(WhatsappTemplatePicker, { width: '420px' })
      .afterClosed()
      .subscribe((template) => {
        // `undefined` = canceló el diálogo (backdrop/Escape) → no abrir nada.
        // `null` = eligió "Sin plantilla" a propósito → abrir sin mensaje.
        if (template === undefined) return;
        void this.whatsapp.openWithTemplate(prospect, template, primaryProject(this.projectsOf(prospect)));
      });
  }

  async remove(prospect: Prospect, event: Event): Promise<void> {
    event.stopPropagation();
    const confirmed = await this.confirmDialog({
      title: '¿Eliminar cliente?',
      message: `"${prospect.name}" se borra para siempre.${describeJobsLoss(this.projectsOf(prospect))} Esta acción no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      icon: 'delete',
      danger: true,
    });
    if (!confirmed) return;
    await this.prospectRepo.delete(prospect.id);
  }

  async deleteSelectedBatch(): Promise<void> {
    const count = this.selection.selected.length;
    if (count === 0) return;

    const confirmed = await this.confirmDialog({
      title: `¿Eliminar ${count} cliente${count !== 1 ? 's' : ''}?`,
      message: `Se borra${count !== 1 ? 'n' : ''} ${count} cliente${count !== 1 ? 's' : ''} para siempre.${describeJobsLoss(this.selection.selected.flatMap((p) => this.projectsOf(p)))} Esta acción no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      icon: 'delete',
      danger: true,
    });
    if (!confirmed) return;

    // Eliminar en paralelo
    const prospectIds = this.selection.selected.map((p) => p.id);
    await Promise.all(prospectIds.map((id) => this.prospectRepo.delete(id)));

    // Limpiar selección
    this.selection.clear();

    // Toast de confirmación
    this.snackBar.open(`${count} cliente${count !== 1 ? 's' : ''} eliminado${count !== 1 ? 's' : ''} correctamente.`, 'Cerrar', { duration: 3000 });
  }

  exportProspects(format: 'csv' | 'md' | 'xlsx'): void {
    const data = this.filtered();
    if (data.length === 0) return;

    const filename = `clientes-${this.getFormattedDate()}`;

    if (format === 'xlsx') {
      exportProspectsToExcel(data, this.statuses(), `${filename}.xlsx`);
    } else {
      const content = format === 'csv' ? prospectsToCsv(data, this.statuses()) : prospectsToMarkdown(data, this.statuses());
      const ext = format === 'csv' ? 'csv' : 'md';
      this.downloadFile(content, `${filename}.${ext}`, format === 'csv' ? 'text/csv;charset=utf-8;' : 'text/markdown;charset=utf-8;');
    }

    this.snackBar.open(`Exportados ${data.length} cliente${data.length !== 1 ? 's' : ''} como ${format.toUpperCase()}`, 'Cerrar', { duration: 3000 });
  }

  async archiveSelectedBatch(): Promise<void> {
    const count = this.selection.selected.length;
    if (count === 0) return;

    const confirmed = await this.confirmDialog({
      title: `¿Archivar ${count} cliente${count !== 1 ? 's' : ''}?`,
      message: `Se archiva${count !== 1 ? 'n' : ''} ${count} cliente${count !== 1 ? 's' : ''} — los recuperás después desde "Archivados".`,
      confirmLabel: 'Archivar',
      icon: 'archive',
    });
    if (!confirmed) return;

    const prospectIds = this.selection.selected.map((p) => p.id);
    await Promise.all(prospectIds.map((id) => this.prospectRepo.update(id, { archived: true })));

    this.selection.clear();
    this.snackBar.open(`${count} cliente${count !== 1 ? 's' : ''} archivado${count !== 1 ? 's' : ''} correctamente.`, 'Cerrar', { duration: 3000 });
  }

  private getFormattedDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }

  private downloadFile(content: string, filename: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
