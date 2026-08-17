import { MessageTemplate } from '../../domain/models/template.model';
import { ParsedTemplateRow } from './template-table.util';

/**
 * Arma el plan de importación a partir de las filas parseadas + las plantillas
 * que ya existen. Reglas (decisión explícita del usuario, no adivinadas):
 *
 * - Mismo nombre + mismo mensaje (entre filas del pegado, o contra una plantilla
 *   ya existente): duplicado real, se fusiona en silencio — no hay nada que decidir.
 * - Mismo nombre + mensaje distinto: conflicto de verdad. Una sola lista de
 *   conflictos, sin importar si el choque es entre dos filas del pegado o contra
 *   la base — dos reglas separadas para el mismo problema es más difícil de
 *   mantener y de explicar en la UI.
 */

export interface ImportVersion {
  body: string;
  shortcut?: string;
  line: number;
}

export interface ConflictGroup {
  name: string;
  existing?: { id: string; body: string; category: string; shortcut?: string };
  /** Versiones distintas encontradas en el pegado para este nombre — ya sin
   * duplicados exactos entre sí (ver `dedupeByBody`). Longitud >= 1 siempre. */
  importVersions: ImportVersion[];
}

export interface ImportPlan {
  fresh: ParsedTemplateRow[];
  unchanged: ParsedTemplateRow[];
  conflicts: ConflictGroup[];
}

function normalizeBody(body: string): string {
  return body.replace(/\s+/g, ' ').trim();
}

function bodiesEqual(a: string, b: string): boolean {
  return normalizeBody(a) === normalizeBody(b);
}

function dedupeByBody(rows: ParsedTemplateRow[]): ParsedTemplateRow[] {
  const unique: ParsedTemplateRow[] = [];
  for (const row of rows) {
    if (!unique.some((u) => bodiesEqual(u.body, row.body))) unique.push(row);
  }
  return unique;
}

export function buildImportPlan(parsedRows: ParsedTemplateRow[], existingTemplates: MessageTemplate[]): ImportPlan {
  // Nombre tal cual lo escribió el usuario, sin normalizar mayúsculas/minúsculas
  // a propósito — "Precio" y "PRECIO" no deberían fusionarse solas por accidente.
  const byName = new Map<string, ParsedTemplateRow[]>();
  for (const row of parsedRows) {
    const list = byName.get(row.name) ?? [];
    list.push(row);
    byName.set(row.name, list);
  }

  const existingByName = new Map(existingTemplates.map((t) => [t.name, t]));

  const fresh: ParsedTemplateRow[] = [];
  const unchanged: ParsedTemplateRow[] = [];
  const conflicts: ConflictGroup[] = [];

  for (const [name, rows] of byName) {
    const uniqueRows = dedupeByBody(rows);
    const existing = existingByName.get(name);

    if (uniqueRows.length === 1 && !existing) {
      fresh.push(uniqueRows[0]);
      continue;
    }
    if (uniqueRows.length === 1 && existing && bodiesEqual(uniqueRows[0].body, existing.body)) {
      unchanged.push(uniqueRows[0]);
      continue;
    }

    conflicts.push({
      name,
      existing: existing
        ? { id: existing.id, body: existing.body, category: existing.category, shortcut: existing.shortcut }
        : undefined,
      importVersions: uniqueRows.map((row) => ({ body: row.body, shortcut: row.shortcut, line: row.line })),
    });
  }

  return { fresh, unchanged, conflicts };
}
