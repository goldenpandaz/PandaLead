/**
 * Utilidades para exportar prospectos a CSV o Markdown.
 */

import { Prospect } from '../../domain/models/prospect.model';
import { StatusConfig } from '../../domain/models/status.model';

/**
 * Convierte un array de prospectos a CSV.
 * Columnas: Nombre, Teléfono, Categoría, Localidad, Email, Estado, Fuente, Creado
 * Usa comillas para todos los campos y escapa comillas dobles como "".
 */
export function prospectsToCsv(prospects: Prospect[], statuses: StatusConfig[]): string {
  const header = ['Nombre', 'Teléfono', 'Categoría', 'Localidad', 'Email', 'Estado', 'Fuente', 'Creado'];

  // Mapear statusId a label
  const statusById = new Map(statuses.map((s) => [s.id, s.label]));

  const rows = prospects.map((p) => [
    p.name,
    p.phone ?? '',
    p.category ?? '',
    p.locality ?? '',
    p.email ?? '',
    statusById.get(p.statusId) ?? '',
    p.source,
    new Date(p.createdAt).toLocaleDateString('es-AR'),
  ]);

  const csvRows = [
    header.map((h) => `"${h}"`).join(','),
    ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')),
  ];

  return csvRows.join('\n');
}

/**
 * Convierte un array de prospectos a tabla Markdown.
 * Columnas: Nombre, Teléfono, Categoría, Localidad, Email, Estado, Fuente, Creado
 */
export function prospectsToMarkdown(prospects: Prospect[], statuses: StatusConfig[]): string {
  const header = ['Nombre', 'Teléfono', 'Categoría', 'Localidad', 'Email', 'Estado', 'Fuente', 'Creado'];

  // Mapear statusId a label
  const statusById = new Map(statuses.map((s) => [s.id, s.label]));

  const rows = prospects.map((p) => [
    p.name,
    p.phone ?? '—',
    p.category ?? '—',
    p.locality ?? '—',
    p.email ?? '—',
    statusById.get(p.statusId) ?? '—',
    p.source,
    new Date(p.createdAt).toLocaleDateString('es-AR'),
  ]);

  const mdLines = [
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.join(' | ')} |`),
  ];

  return mdLines.join('\n');
}
