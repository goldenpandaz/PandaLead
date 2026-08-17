/**
 * Parser de CSV para importación de servicios en masa.
 * Soporta CSV con delimitador automático (coma o punto y coma).
 * Mapea columnas automáticamente de forma flexible (case-insensitive, sin acentos).
 */

export interface ParsedServiceRow {
  name: string;
  price?: number;
  description?: string;
  /** Línea de origen dentro de las filas de datos (1-based) — solo para mostrar
   * "Fila N" en la vista previa/conflictos. */
  line: number;
}

export interface ParseServiceResult {
  rows: ParsedServiceRow[];
  error?: string;
}

const NAME_HEADERS = new Set(['nombre', 'servicio', 'name', 'service']);
const PRICE_HEADERS = new Set(['precio', 'price', 'valor', 'costo', 'cost']);
const DESCRIPTION_HEADERS = new Set(['descripcion', 'description', 'detalle', 'notes', 'notas']);

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

function parsePrice(priceStr: string): number | undefined {
  if (!priceStr?.trim()) return undefined;
  // Remover símbolo de moneda, espacios y convertir coma decimal a punto
  const cleaned = priceStr
    .trim()
    .replace(/[$,.\s]/g, (match) => (match === '.' ? '.' : match === ',' && !priceStr.includes('.') ? '.' : ''))
    .replace(/[^\d.]/g, '');
  const num = parseFloat(cleaned);
  return !isNaN(num) && num >= 0 ? num : undefined;
}

export function parseServiceCsv(raw: string): ParseServiceResult {
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
    if (isMarkdown && isSeparatorRow(cells)) continue;
    dataCells.push(cells);
  }

  if (!header) return { rows: [], error: 'No encontré ni siquiera un encabezado.' };

  // Buscar índices de columnas
  const findHeaderIndex = (headerSet: Set<string>): number => {
    return header!.findIndex((h) => headerSet.has(h));
  };

  const nameIdx = findHeaderIndex(NAME_HEADERS);
  if (nameIdx === -1) {
    return { rows: [], error: 'No encontré la columna "Nombre" — revisá los encabezados de la tabla.' };
  }

  const priceIdx = findHeaderIndex(PRICE_HEADERS);
  const descriptionIdx = findHeaderIndex(DESCRIPTION_HEADERS);

  const rows: ParsedServiceRow[] = [];
  dataCells.forEach((cells, i) => {
    const name = (cells[nameIdx] ?? '').trim();
    if (!name) return; // fila incompleta (sin nombre) — se ignora

    rows.push({
      name,
      price: priceIdx >= 0 ? parsePrice(cells[priceIdx] ?? '') : undefined,
      description: descriptionIdx >= 0 ? (cells[descriptionIdx] ?? '').trim() || undefined : undefined,
      line: i + 1,
    });
  });

  if (rows.length === 0) return { rows: [], error: 'La tabla no tiene filas de datos válidas.' };
  return { rows };
}

/**
 * Convierte un array de servicios a CSV.
 * Usa formato simple: Nombre, Precio, Descripción.
 */
export function servicesToCsv(services: Array<{ name: string; price?: number; description?: string }>): string {
  const header = ['Nombre', 'Precio', 'Descripción'];
  const rows = services.map((s) => [s.name, s.price ? `$${s.price}` : '', s.description || '']);

  const csvRows = [
    header.map((h) => `"${h}"`).join(','),
    ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
  ];

  return csvRows.join('\n');
}
