/** Conversión entre los strings que guarda la base (yyyy-mm-dd, HH:mm) y los `Date` de los pickers de Material. */

export function parseIsoDate(value: string | undefined): Date | null {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function formatIsoDate(value: Date | null): string | undefined {
  if (!value || Number.isNaN(value.getTime())) return undefined;
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  const dd = String(value.getDate()).padStart(2, '0');
  return `${value.getFullYear()}-${mm}-${dd}`;
}

export function parseTime(value: string | undefined): Date | null {
  if (!value) return null;
  const [h, min] = value.split(':').map(Number);
  const date = new Date();
  date.setHours(h, min, 0, 0);
  return date;
}

export function formatTime(value: Date | null): string | undefined {
  if (!value || Number.isNaN(value.getTime())) return undefined;
  return `${String(value.getHours()).padStart(2, '0')}:${String(value.getMinutes()).padStart(2, '0')}`;
}
