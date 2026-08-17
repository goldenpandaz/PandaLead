import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ConfigRepository } from '../../../data/repositories/config.repository';
import { ServiceConfig } from '../../../domain/models/service.model';
import { parseServiceCsv, ParsedServiceRow } from '../../../shared/utils/service-csv.util';

type Step = 'input' | 'preview';

interface GroupResolution {
  action: 'skip' | 'overwrite';
}

export interface ServiceImportSummary {
  created: number;
  skipped: number;
  duplicates: number;
}

interface ConflictGroup {
  name: string;
  existingService?: ServiceConfig;
  importRow: ParsedServiceRow;
  line: number;
}

@Component({
  selector: 'app-service-import-dialog',
  imports: [
    CurrencyPipe,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  templateUrl: './service-import-dialog.html',
  styleUrl: './service-import-dialog.scss',
})
export class ServiceImportDialog {
  private readonly dialogRef = inject(MatDialogRef<ServiceImportDialog, ServiceImportSummary | undefined>);
  private readonly configRepo = inject(ConfigRepository);

  private readonly existingServices = toSignal(this.configRepo.watchServices(), { initialValue: [] as ServiceConfig[] });

  readonly step = signal<Step>('input');
  readonly rawText = signal('');
  readonly parseError = signal<string | null>(null);
  readonly saving = signal(false);

  readonly parsedRows = signal<ParsedServiceRow[]>([]);
  readonly conflicts = signal<ConflictGroup[]>([]);
  readonly fresh = signal<ParsedServiceRow[]>([]);
  readonly incomplete = signal<ParsedServiceRow[]>([]);
  readonly resolutions = signal<Record<number, GroupResolution>>({});

  private readonly serviceByName = computed(() => {
    const map = new Map<string, ServiceConfig>();
    for (const s of this.existingServices()) {
      map.set(s.name.toLowerCase(), s);
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
    const result = parseServiceCsv(this.rawText());
    if (result.error) {
      this.parseError.set(result.error);
      this.parsedRows.set([]);
      return;
    }

    this.parseError.set(null);
    this.parsedRows.set(result.rows);

    // Separar en fresh, conflictos e incompletos
    const fresh: ParsedServiceRow[] = [];
    const incomplete: ParsedServiceRow[] = [];
    const conflictMap = new Map<string, ConflictGroup>();
    const seenInBatch = new Set<string>();

    for (const row of result.rows) {
      // Validar que tenga nombre (requerido)
      if (!row.name?.trim()) {
        incomplete.push(row);
        continue;
      }

      // Si tiene precio, debe ser número válido
      if (row.price !== undefined && isNaN(row.price)) {
        incomplete.push(row);
        continue;
      }

      // Buscar duplicados por nombre (case-insensitive)
      const nameLower = row.name.toLowerCase();

      // Verificar si ya existe en la base de datos
      const existing = this.serviceByName().get(nameLower);
      if (existing) {
        conflictMap.set(nameLower, {
          name: row.name,
          existingService: existing,
          importRow: row,
          line: row.line,
        });
      } else if (!seenInBatch.has(nameLower)) {
        // Primera vez que vemos este nombre en el lote
        fresh.push(row);
        seenInBatch.add(nameLower);
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

  setResolution(groupIndex: number, action: 'skip' | 'overwrite'): void {
    this.resolutions.update((r) => ({
      ...r,
      [groupIndex]: { action },
    }));
  }

  getResolution(groupIndex: number): GroupResolution {
    return this.resolutions()[groupIndex] || { action: 'skip' };
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

  private async applyImport(): Promise<ServiceImportSummary> {
    const summary: ServiceImportSummary = { created: 0, skipped: 0, duplicates: 0 };

    // Importar servicios nuevos
    for (const row of this.fresh()) {
      await this.configRepo.saveService({
        name: row.name,
        price: row.price,
        description: row.description,
      });
      summary.created++;
    }

    // Manejar conflictos
    const resolutions = this.resolutions();
    for (const [index, conflict] of this.conflicts().entries()) {
      const resolution = resolutions[index];
      if (!resolution) continue;

      if (resolution.action === 'overwrite') {
        // Actualizar el servicio existente
        if (conflict.existingService) {
          await this.configRepo.saveService({
            id: conflict.existingService.id,
            name: conflict.importRow.name,
            price: conflict.importRow.price !== undefined ? conflict.importRow.price : conflict.existingService.price,
            description: conflict.importRow.description || conflict.existingService.description,
          });
          summary.duplicates++;
        }
      } else {
        summary.skipped++;
      }
    }

    return summary;
  }
}
