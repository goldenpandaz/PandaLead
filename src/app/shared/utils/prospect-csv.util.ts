/**
 * Parser de CSV/MD para importación de clientes en masa.
 * Soporta CSV con delimitador automático (coma o punto y coma) y markdown.
 * Mapea columnas automáticamente de forma flexible (case-insensitive, sin acentos).
 */

export interface ParsedProspectRow {
  name: string;
  phone?: string;
  category?: string;
  locality?: string;
  state?: string;
  notes?: string;
  /** Línea de origen dentro de las filas de datos (1-based) — solo para mostrar
   * "Fila N" en la vista previa/conflictos. */
  line: number;
}

export interface ParseProspectResult {
  rows: ParsedProspectRow[];
  error?: string;
}

const NAME_HEADERS = new Set(['nombre', 'nombre negocio', 'negocio', 'business', 'empresa']);
const PHONE_HEADERS = new Set(['telefono', 'phone', 'tel', 'celular']);
const CATEGORY_HEADERS = new Set(['categoria', 'category', 'rubro', 'tipo']);
const LOCALITY_HEADERS = new Set(['localidad', 'locality', 'ciudad', 'zone', 'zona', 'barrio', 'location']);
const STATE_HEADERS = new Set(['estado', 'state', 'status']);
const NOTES_HEADERS = new Set(['notas', 'notes', 'descripcion', 'description', 'obs', 'observaciones']);

const DIACRITIC_MARKS_RE = new RegExp('[\\u0300-\\u036f]', 'g');

function normalizeHeader(cell: string): string {
  return cell
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(DIACRITIC_MARKS_RE, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}

/** Separa una fila markdown por `|` no escapados, sacando los pipes exteriores. */
function splitMarkdownRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split(/(?<!\\)\|/).map((cell) => cell.trim().replace(/\\\|/g, '|'));
}

/** CSV mínimo: soporta campos entre comillas (con comas/comillas escapadas adentro). */
function splitCsvRow(line: string, delimiter: string): string[] {
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
    } else if (char === delimiter) {
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

/** Detecta el delimiter más probable (coma o punto y coma). */
function detectDelimiter(text: string): string {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return ',';

  // Primera línea es header — contar delimitadores
  const firstLine = lines[0];
  const commaCount = (firstLine.match(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/g) || []).length;
  const semicolonCount = (firstLine.match(/;(?=(?:[^"]*"[^"]*")*[^"]*$)/g) || []).length;

  return semicolonCount > commaCount ? ';' : ',';
}

export function parseProspectCsv(raw: string): ParseProspectResult {
  const lines = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return { rows: [], error: 'No pegaste ni subiste nada.' };

  const isMarkdown = lines.some((line) => line.includes('|'));
  const delimiter = isMarkdown ? ',' : detectDelimiter(raw);
  const splitRow = isMarkdown ? splitMarkdownRow : (line: string) => splitCsvRow(line, delimiter);

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

  // Buscar índices de columnas
  const findHeaderIndex = (headerSet: Set<string>): number => {
    return header!.findIndex((h) => headerSet.has(h));
  };

  const nameIdx = findHeaderIndex(NAME_HEADERS);
  if (nameIdx === -1) {
    return { rows: [], error: 'No encontré la columna "Nombre negocio" — revisá los encabezados de la tabla.' };
  }

  const phoneIdx = findHeaderIndex(PHONE_HEADERS);
  const categoryIdx = findHeaderIndex(CATEGORY_HEADERS);
  const localityIdx = findHeaderIndex(LOCALITY_HEADERS);
  const stateIdx = findHeaderIndex(STATE_HEADERS);
  const notesIdx = findHeaderIndex(NOTES_HEADERS);

  const rows: ParsedProspectRow[] = [];
  dataCells.forEach((cells, i) => {
    const name = (cells[nameIdx] ?? '').trim();
    if (!name) return; // fila incompleta (sin nombre) — se ignora

    // Para localidad, concatenar ciudad + zona/barrio si ambas existen
    let locality = '';
    if (localityIdx >= 0) {
      locality = (cells[localityIdx] ?? '').trim();
    }

    rows.push({
      name,
      phone: phoneIdx >= 0 ? (cells[phoneIdx] ?? '').trim() || undefined : undefined,
      category: categoryIdx >= 0 ? (cells[categoryIdx] ?? '').trim() || undefined : undefined,
      locality: locality || undefined,
      state: stateIdx >= 0 ? (cells[stateIdx] ?? '').trim() || undefined : undefined,
      notes: notesIdx >= 0 ? (cells[notesIdx] ?? '').trim() || undefined : undefined,
      line: i + 1,
    });
  });

  if (rows.length === 0) return { rows: [], error: 'La tabla no tiene filas de datos válidas.' };
  return { rows };
}
