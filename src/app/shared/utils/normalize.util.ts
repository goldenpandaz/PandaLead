/**
 * Normalizadores compartidos entre `features/ocr/parsers` y `data/duplicate-detection.service.ts`.
 * Viven en `shared/` (no en `features/` ni en `data/`) justamente para que ninguna
 * de las dos capas dependa de la otra. Ver .docs/architecture.md §4.
 */

const DIACRITIC_MARKS_RE = new RegExp('[\\u0300-\\u036f]', 'g');

export function normalizeName(name: string): string {
  return name
    .normalize('NFD')
    .replace(DIACRITIC_MARKS_RE, '') // saca acentos (marcas diacríticas combinantes)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Deja solo dígitos — para comparar teléfonos sin importar formato (+54, guiones, espacios). */
export function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/** Saca protocolo, "www." y slash final — para comparar sitios web sin importar formato. */
export function normalizeDomain(url: string): string {
  return url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/+$/, '');
}
