/**
 * Utilidades para exportar templates a CSV.
 * (Importación usa `template-table.util.ts`)
 */

import { MessageTemplate } from '../../domain/models/template.model';

/**
 * Convierte un array de templates a CSV.
 * Usa formato simple: Nombre, Mensaje, Atajo.
 */
export function templatesToCsv(templates: MessageTemplate[]): string {
  const header = ['Nombre', 'Mensaje', 'Atajo'];
  const rows = templates.map((t) => [t.name, t.body, t.shortcut || '']);

  const csvRows = [
    header.map((h) => `"${h}"`).join(','),
    ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
  ];

  return csvRows.join('\n');
}
