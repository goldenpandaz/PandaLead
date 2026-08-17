import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { ConfigRepository } from '../../../data/repositories/config.repository';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { Prospect, ProspectDetails } from '../../../domain/models/prospect.model';
import { StatusConfig } from '../../../domain/models/status.model';
import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { normalizePhone, normalizeName } from '../../../shared/utils/normalize.util';
import { parseProspectCsv, ParsedProspectRow } from '../../../shared/utils/prospect-csv.util';

type Step = 'input' | 'preview';

interface DuplicateAction {
  action: 'skip' | 'overwrite';
}

interface GroupResolution {
  keeper: 'new' | 'existing';
  action?: DuplicateAction;
}

export interface ProspectImportSummary {
  created: number;
  skipped: number;
  duplicates: number;
}

interface ConflictGroup {
  name: string;
  phone: string;
  existingProspectId?: string;
  importRow: ParsedProspectRow;
  line: number;
}

@Component({
  selector: 'app-prospect-import-dialog',
  imports: [
    FormsModule,
    SlicePipe,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './prospect-import-dialog.html',
  styleUrl: './prospect-import-dialog.scss',
})
export class ProspectImportDialog {
  private readonly dialogRef = inject(MatDialogRef<ProspectImportDialog, ProspectImportSummary | undefined>);
  private readonly configRepo = inject(ConfigRepository);
  private readonly prospectRepo = inject(ProspectRepository);

  private readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] as StatusConfig[] });
  private readonly existingProspects = toSignal(this.prospectRepo.watchAll(), { initialValue: [] as Prospect[] });

  readonly step = signal<Step>('input');
  readonly rawText = signal('');
  readonly parseError = signal<string | null>(null);
  readonly saving = signal(false);

  readonly parsedRows = signal<ParsedProspectRow[]>([]);
  readonly conflicts = signal<ConflictGroup[]>([]);
  readonly fresh = signal<ParsedProspectRow[]>([]);
  readonly incomplete = signal<ParsedProspectRow[]>([]);
  readonly resolutions = signal<Record<number, GroupResolution>>({});

  private readonly statusById = computed(() => new Map(this.statuses().map((s) => [s.id, s])));
  private readonly statusByLabel = computed(() => new Map(this.statuses().map((s) => [s.label, s])));
  private readonly prospectByKey = computed(() => {
    const map = new Map<string, Prospect>();
    for (const p of this.existingProspects()) {
      const normalizedPhone = p.phone ? normalizePhone(p.phone) : '';
      const key = p.normalizedName + '|' + normalizedPhone;
      map.set(key, p);
    }
    return map;
  });

  readonly summaryStats = computed(() => {
    const conflicts = this.conflicts().length;
    const fresh = this.fresh().length;
    const incomplete = this.incomplete().length;
    return { fresh, conflicts, incomplete };
  });

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.rawText.set(await file.text());
  }

  parse(): void {
    const result = parseProspectCsv(this.rawText());
    if (result.error) {
      this.parseError.set(result.error);
      this.parsedRows.set([]);
      return;
    }

    this.parseError.set(null);
    this.parsedRows.set(result.rows);

    // Separar en fresh, conflictos e incompletos
    const fresh: ParsedProspectRow[] = [];
    const incomplete: ParsedProspectRow[] = [];
    const conflictMap = new Map<string, ConflictGroup>();
    const seenInBatch = new Set<string>();

    for (const row of result.rows) {
      // Validar que tenga nombre (requerido)
      if (!row.name?.trim()) {
        incomplete.push(row);
        continue;
      }

      // Si tiene teléfono, validar que sea números válidos después de normalizar
      if (row.phone) {
        const normalized = normalizePhone(row.phone);
        if (normalized.length === 0) {
          incomplete.push(row);
          continue;
        }
      }

      // Buscar duplicados (mismo nombre + teléfono)
      const normalizedName = normalizeName(row.name);
      const normalizedPhone = row.phone ? normalizePhone(row.phone) : '';
      const key = normalizedName + '|' + normalizedPhone;

      // Verificar si ya existe en la base de datos
      const existing = this.prospectByKey().get(key);
      if (existing) {
        conflictMap.set(key, {
          name: row.name,
          phone: row.phone || '',
          existingProspectId: existing.id,
          importRow: row,
          line: row.line,
        });
      } else if (!seenInBatch.has(key)) {
        // Primera vez que vemos este nombre+teléfono en el lote
        fresh.push(row);
        seenInBatch.add(key);
      }
      // Si ya existe en el lote, lo ignoramos (duplicado dentro del lote)
    }

    this.fresh.set(fresh);
    this.conflicts.set(Array.from(conflictMap.values()));
    this.incomplete.set(incomplete);
    this.resolutions.set({});
    this.step.set('preview');
  }

  back(): void {
    this.step.set('input');
  }

  setResolution(groupIndex: number, keeper: 'new' | 'existing'): void {
    this.resolutions.update((r) => ({
      ...r,
      [groupIndex]: { keeper, action: keeper === 'new' ? { action: 'overwrite' } : undefined },
    }));
  }

  setDuplicateAction(groupIndex: number, action: 'skip' | 'overwrite'): void {
    this.resolutions.update((r) => {
      const current = r[groupIndex] || { keeper: 'new' };
      return {
        ...r,
        [groupIndex]: { ...current, action: { action } },
      };
    });
  }

  getResolution(groupIndex: number): GroupResolution {
    return this.resolutions()[groupIndex] || { keeper: 'new', action: { action: 'skip' } };
  }

  cancel(): void {
    this.dialogRef.close(undefined);
  }

  async confirm(): Promise<void> {
    this.saving.set(true);
    try {
      const summary = await this.applyImport();
      this.dialogRef.close(summary);
    } finally {
      this.saving.set(false);
    }
  }

  private async applyImport(): Promise<ProspectImportSummary> {
    const summary: ProspectImportSummary = { created: 0, skipped: 0, duplicates: 0 };

    // Obtener el estado por defecto (el primero, "Posible cliente")
    const defaultStatus = this.statuses()[0];
    if (!defaultStatus) return summary;

    // Importar filas nuevas
    for (const row of this.fresh()) {
      await this.createProspect(row, defaultStatus);
      summary.created++;
    }

    // Manejar conflictos
    const resolutions = this.resolutions();
    for (const [index, conflict] of this.conflicts().entries()) {
      const resolution = resolutions[index];
      if (!resolution) continue;

      if (resolution.keeper === 'new') {
        if (resolution.action?.action === 'overwrite') {
          // Actualizar el prospect existente
          if (conflict.existingProspectId) {
            await this.prospectRepo.update(conflict.existingProspectId, {
              category: conflict.importRow.category || undefined,
              locality: conflict.importRow.locality || undefined,
              statusId: this.mapStatus(conflict.importRow.state, defaultStatus),
            });
            if (conflict.importRow.notes) {
              await this.prospectRepo.saveDetails(conflict.existingProspectId, {
                description: conflict.importRow.notes,
                ocrRawText: '',
              });
            }
          }
          summary.duplicates++;
        } else {
          summary.skipped++;
        }
      } else {
        summary.skipped++;
      }
    }

    return summary;
  }

  private async createProspect(row: ParsedProspectRow, defaultStatus: StatusConfig): Promise<void> {
    const prospectId = await this.prospectRepo.create({
      name: row.name,
      normalizedName: normalizeName(row.name),
      phone: row.phone || undefined,
      category: row.category || undefined,
      locality: row.locality || undefined,
      statusId: this.mapStatus(row.state, defaultStatus),
      source: CaptureSource.Import,
      favorite: false,
    });

    if (row.notes) {
      await this.prospectRepo.saveDetails(prospectId, {
        description: row.notes,
        ocrRawText: '',
      });
    }
  }

  private mapStatus(stateLabel: string | undefined, defaultStatus: StatusConfig): string {
    if (!stateLabel) return defaultStatus.id;

    // Buscar por coincidencia exacta
    const status = this.statusByLabel().get(stateLabel);
    return status?.id || defaultStatus.id;
  }
}
