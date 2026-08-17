/**
 * Parser de la tabla que se pega/sube en "Importar plantillas" (Settings → Plantillas).
 * Soporta tabla markdown (`| Atajo | Momento | Mensaje |`) o CSV — se detecta sola
 * por si el texto tiene `|` en alguna línea. Deliberadamente simple: sin librería
 * externa, sin soporte de formatos raros — es exactamente el formato que ya usa
 * el usuario para armar sus tablas de mensajes, nada más.
 */

export interface ParsedTemplateRow {
  name: string;
  body: string;
  shortcut?: string;
  /** Línea de origen dentro de las filas de datos (1-based) — solo para mostrar
   * "Fila N" en la vista previa/conflictos, no tiene otro uso. */
  line: number;
}

export interface ParseTableResult {
  rows: ParsedTemplateRow[];
  error?: string;
}

const NAME_HEADERS = new Set(['momento', 'nombre']);
const BODY_HEADERS = new Set(['mensaje', 'contenido', 'body']);
const SHORTCUT_HEADERS = new Set(['atajo', 'shortcut']);

// Mismo criterio que `shared/utils/normalize.util.ts`: rango escrito con \u
// (no el caracter combinante suelto) para que no dependa de cómo cada editor
// guarde el archivo.
const DIACRITIC_MARKS_RE = new RegExp('[\\u0300-\\u036f]', 'g');

function normalizeHeader(cell: string): string {
  return cell.trim().toLowerCase().normalize('NFD').replace(DIACRITIC_MARKS_RE, '');
}

/** Separa una fila markdown por `|` no escapados, sacando los pipes exteriores
 * si están (`| a | b |` o `a | b`, las dos formas son válidas en markdown). */
function splitMarkdownRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, '|'));
}

/** CSV mínimo: soporta campos entre comillas (con comas/comillas escapadas adentro). */
function splitCsvRow(line: string): string[] {
  const cells: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (inQuotes) {
      if (char === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      cells.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  cells.push(current.trim());
  return cells;
}

function isSeparatorRow(cells: string[]): boolean {
  return cells.length > 0 && cells.every((cell) => /^:?-{2,}:?$/.test(cell));
}

export function parseTemplateTable(raw: string): ParseTableResult {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length === 0) return { rows: [], error: 'No pegaste ni subiste nada.' };

  const isMarkdown = lines.some((line) => line.includes('|'));
  const splitRow = isMarkdown ? splitMarkdownRow : splitCsvRow;

  let header: string[] | null = null;
  const dataCells: string[][] = [];

  for (const line of lines) {
    const cells = splitRow(line);
    if (!header) {
      header = cells.map(normalizeHeader);
      continue;
    }
    if (isMarkdown && isSeparatorRow(cells)) continue; // fila `|---|---|---|`, no es dato
    dataCells.push(cells);
  }

  if (!header) return { rows: [], error: 'No encontré ni siquiera un encabezado.' };

  const nameIdx = header.findIndex((h) => NAME_HEADERS.has(h));
  const bodyIdx = header.findIndex((h) => BODY_HEADERS.has(h));
  const shortcutIdx = header.findIndex((h) => SHORTCUT_HEADERS.has(h));

  if (nameIdx === -1 || bodyIdx === -1) {
    return { rows: [], error: 'No encontré las columnas "Momento" y "Mensaje" — revisá los encabezados de la tabla.' };
  }

  const rows: ParsedTemplateRow[] = [];
  dataCells.forEach((cells, i) => {
    const name = (cells[nameIdx] ?? '').trim();
    const body = (cells[bodyIdx] ?? '').trim();
    if (!name || !body) return; // fila incompleta (sin nombre o sin mensaje) — se ignora sin ruido
    rows.push({
      name,
      body,
      shortcut: shortcutIdx >= 0 ? (cells[shortcutIdx] ?? '').trim() || undefined : undefined,
      line: i + 1,
    });
  });

  if (rows.length === 0) return { rows: [], error: 'La tabla no tiene filas de datos válidas.' };
  return { rows };
}
