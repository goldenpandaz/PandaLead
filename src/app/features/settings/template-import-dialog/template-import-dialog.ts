import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ConfigRepository } from '../../../data/repositories/config.repository';
import { MessageTemplate } from '../../../domain/models/template.model';
import { extractVariables, findUnknownVariables } from '../../../shared/utils/template-fields.util';
import { ConflictGroup, ImportPlan, buildImportPlan } from '../../../shared/utils/template-import-plan.util';
import { parseTemplateTable } from '../../../shared/utils/template-table.util';

type Step = 'input' | 'preview';

interface ExtraAction {
  action: 'discard' | 'rename';
  name?: string;
}

interface GroupResolution {
  /** 'existing' = se queda la que ya está guardada; number = índice dentro de
   * `importVersions` de ese grupo. */
  keeper: 'existing' | number;
  /** Una entrada por cada `importVersions[i]` que NO sea la keeper. Ausente = descartar. */
  extras: Record<number, ExtraAction>;
}

export interface ImportSummary {
  created: number;
  updated: number;
  discarded: number;
}

function defaultResolution(group: ConflictGroup): GroupResolution {
  return { keeper: group.existing ? 'existing' : 0, extras: {} };
}

/**
 * "Importar plantillas" — pega/sube una tabla de mensajes y los da de alta de
 * una, en vez de cargar cada uno a mano desde el form de Plantillas. Dos pasos:
 * pegar/subir → previsualizar (con resolución de conflictos) → confirmar.
 * Los conflictos (mismo nombre, mensaje distinto) usan UNA sola UI sin importar
 * si chocan entre sí dentro del pegado o contra una plantilla ya existente.
 */
@Component({
  selector: 'app-template-import-dialog',
  imports: [FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule],
  templateUrl: './template-import-dialog.html',
  styleUrl: './template-import-dialog.scss',
})
export class TemplateImportDialog {
  private readonly dialogRef = inject(MatDialogRef<TemplateImportDialog, ImportSummary | undefined>);
  private readonly configRepo = inject(ConfigRepository);

  private readonly existingTemplates = toSignal(this.configRepo.watchTemplates(), { initialValue: [] as MessageTemplate[] });

  readonly step = signal<Step>('input');
  readonly rawText = signal('');
  readonly batchCategory = signal('');
  readonly parseError = signal<string | null>(null);
  readonly saving = signal(false);

  readonly plan = signal<ImportPlan | null>(null);
  readonly resolutions = signal<GroupResolution[]>([]);

  unknownVariablesFor(body: string): string[] {
    return findUnknownVariables(body);
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = ''; // permite volver a elegir el mismo archivo si el usuario lo corrige y lo sube de nuevo
    if (!file) return;
    this.rawText.set(await file.text());
  }

  parse(): void {
    const result = parseTemplateTable(this.rawText());
    if (result.error) {
      this.parseError.set(result.error);
      this.plan.set(null);
      return;
    }
    this.parseError.set(null);
    const plan = buildImportPlan(result.rows, this.existingTemplates());
    this.plan.set(plan);
    this.resolutions.set(plan.conflicts.map(defaultResolution));
    this.step.set('preview');
  }

  back(): void {
    this.step.set('input');
  }

  setKeeper(groupIndex: number, keeper: 'existing' | number): void {
    // Cambiar la keeper invalida qué era "extra" antes — se resetean las
    // decisiones de ese grupo en vez de arrastrar un estado que ya no aplica.
    this.resolutions.update((list) => list.map((r, i) => (i === groupIndex ? { keeper, extras: {} } : r)));
  }

  setExtraAction(groupIndex: number, versionIndex: number, action: 'discard' | 'rename'): void {
    this.resolutions.update((list) =>
      list.map((r, i) => {
        if (i !== groupIndex) return r;
        const previousName = r.extras[versionIndex]?.name ?? '';
        const extras = { ...r.extras, [versionIndex]: action === 'rename' ? { action, name: previousName } : { action } };
        return { ...r, extras };
      }),
    );
  }

  setExtraName(groupIndex: number, versionIndex: number, name: string): void {
    this.resolutions.update((list) =>
      list.map((r, i) => (i === groupIndex ? { ...r, extras: { ...r.extras, [versionIndex]: { action: 'rename', name } } } : r)),
    );
  }

  isKeeper(groupIndex: number, keeper: 'existing' | number): boolean {
    return this.resolutions()[groupIndex]?.keeper === keeper;
  }

  extraActionOf(groupIndex: number, versionIndex: number): 'discard' | 'rename' {
    return this.resolutions()[groupIndex]?.extras[versionIndex]?.action ?? 'discard';
  }

  extraNameOf(groupIndex: number, versionIndex: number): string {
    return this.resolutions()[groupIndex]?.extras[versionIndex]?.name ?? '';
  }

  cancel(): void {
    this.dialogRef.close(undefined);
  }

  async confirm(): Promise<void> {
    const plan = this.plan();
    if (!plan) return;

    this.saving.set(true);
    try {
      const summary = await this.applyPlan(plan);
      this.dialogRef.close(summary);
    } finally {
      this.saving.set(false);
    }
  }

  private async applyPlan(plan: ImportPlan): Promise<ImportSummary> {
    const summary: ImportSummary = { created: 0, updated: 0, discarded: 0 };
    const category = this.batchCategory().trim();

    for (const row of plan.fresh) {
      await this.saveNew(row.name, row.body, row.shortcut, category);
      summary.created++;
    }
    // `unchanged` no se toca — ya está igual en la base, guardarlo de nuevo no aporta nada.

    const resolutions = this.resolutions();
    for (const [groupIndex, group] of plan.conflicts.entries()) {
      const resolution = resolutions[groupIndex];
      const keeperVersion = resolution.keeper === 'existing' ? null : group.importVersions[resolution.keeper];

      if (keeperVersion) {
        await this.configRepo.saveTemplate({
          id: group.existing?.id,
          name: group.name,
          category: category || group.existing?.category || '',
          body: keeperVersion.body,
          shortcut: keeperVersion.shortcut,
          variables: extractVariables(keeperVersion.body),
        });
        group.existing ? summary.updated++ : summary.created++;
      }
      // keeper === 'existing' → no hay nada que escribir, la plantilla ya está bien como está.

      for (const [versionIndex, version] of group.importVersions.entries()) {
        if (resolution.keeper === versionIndex) continue; // es la keeper, ya se guardó arriba
        const extra = resolution.extras[versionIndex] ?? { action: 'discard' };
        if (extra.action === 'discard' || !extra.name?.trim()) {
          summary.discarded++;
          continue;
        }
        await this.saveNew(extra.name.trim(), version.body, version.shortcut, category);
        summary.created++;
      }
    }

    return summary;
  }

  private async saveNew(name: string, body: string, shortcut: string | undefined, category: string): Promise<void> {
    await this.configRepo.saveTemplate({ name, category, body, shortcut, variables: extractVariables(body) });
  }
}
