/**
 * Utilidades para exportar datos a Excel con formato.
 * Usa la librería xlsx para generar archivos .xlsx con estilos.
 */

import * as XLSX from 'xlsx';
import { Prospect } from '../../domain/models/prospect.model';
import { StatusConfig } from '../../domain/models/status.model';
import { ServiceConfig } from '../../domain/models/service.model';
import { MessageTemplate } from '../../domain/models/template.model';

/** Estilos para celdas de encabezado */
const HEADER_STYLE = {
  font: { bold: true, color: { rgb: 'FFFFFF' } },
  fill: { fgColor: { rgb: '1F4788' } },
  alignment: { horizontal: 'center', vertical: 'center', wrapText: true },
  border: { left: { style: 'thin' }, right: { style: 'thin' }, top: { style: 'thin' }, bottom: { style: 'thin' } },
};

/** Estilos para celdas de datos */
const DATA_STYLE = {
  border: { left: { style: 'thin' }, right: { style: 'thin' }, top: { style: 'thin' }, bottom: { style: 'thin' } },
  alignment: { vertical: 'top' },
};

/** Estilos para celdas alternadas (filas pares) */
const ALTERNATE_STYLE = {
  fill: { fgColor: { rgb: 'F5F5F5' } },
  border: { left: { style: 'thin' }, right: { style: 'thin' }, top: { style: 'thin' }, bottom: { style: 'thin' } },
  alignment: { vertical: 'top' },
};

/**
 * Exporta un array de prospectos a Excel con formato.
 * Incluye: Nombre, Teléfono, Categoría, Localidad, Email, Estado, Fuente, Creado
 */
export function exportProspectsToExcel(prospects: Prospect[], statuses: StatusConfig[], filename: string): void {
  const statusById = new Map(statuses.map((s) => [s.id, s]));

  // Preparar datos
  const headers = ['Nombre', 'Teléfono', 'Categoría', 'Localidad', 'Email', 'Estado', 'Fuente', 'Creado'];
  const data = prospects.map((p) => {
    const status = statusById.get(p.statusId);
    return [
      p.name,
      p.phone ?? '',
      p.category ?? '',
      p.locality ?? '',
      p.email ?? '',
      status?.label ?? '',
      p.source,
      new Date(p.createdAt).toLocaleDateString('es-AR'),
    ];
  });

  createExcelFile(headers, data, filename, statuses, prospects, statusById);
}

/**
 * Exporta un array de servicios a Excel con formato.
 * Incluye: Nombre, Precio, Descripción
 */
export function exportServicesToExcel(services: ServiceConfig[], filename: string): void {
  const headers = ['Nombre', 'Precio', 'Descripción'];
  const data = services.map((s) => [s.name, s.price ? `$${s.price}` : '', s.description ?? '']);

  createSimpleExcelFile(headers, data, filename);
}

/**
 * Exporta un array de plantillas a Excel con formato.
 * Incluye: Nombre, Mensaje, Atajo
 */
export function exportTemplatesToExcel(templates: MessageTemplate[], filename: string): void {
  const headers = ['Nombre', 'Mensaje', 'Atajo'];
  const data = templates.map((t) => [t.name, t.body, t.shortcut ?? '']);

  createSimpleExcelFile(headers, data, filename);
}

/**
 * Crea un archivo Excel simple (sin colores de estado específicos).
 */
function createSimpleExcelFile(headers: string[], data: string[][], filename: string): void {
  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);

  // Aplicar estilos a encabezado
  for (let col = 0; col < headers.length; col++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
    if (!worksheet[cellAddress]) worksheet[cellAddress] = {};
    worksheet[cellAddress].s = HEADER_STYLE;
  }

  // Aplicar estilos a datos (alternando colores)
  for (let row = 1; row < data.length + 1; row++) {
    for (let col = 0; col < headers.length; col++) {
      const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
      if (!worksheet[cellAddress]) worksheet[cellAddress] = {};
      worksheet[cellAddress].s = row % 2 === 0 ? ALTERNATE_STYLE : DATA_STYLE;
    }
  }

  // Configurar ancho de columnas
  worksheet['!cols'] = headers.map((h) => ({
    wch: Math.min(Math.max(h.length + 2, 15), 50),
  }));

  // Congelar primera fila
  worksheet['!freeze'] = { xSplit: 0, ySplit: 1 };

  // Agregar filtro automático
  if (data.length > 0) {
    worksheet['!autofilter'] = { ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: data.length, c: headers.length - 1 } }) };
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

  XLSX.writeFile(workbook, filename);
}

/**
 * Crea un archivo Excel con estilos específicos para prospectos (incluyendo colores de estado).
 */
function createExcelFile(
  headers: string[],
  data: string[][],
  filename: string,
  statuses: StatusConfig[],
  prospects: Prospect[],
  statusById: Map<string, StatusConfig>,
): void {
  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);

  // Aplicar estilos a encabezado
  for (let col = 0; col < headers.length; col++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
    if (!worksheet[cellAddress]) worksheet[cellAddress] = {};
    worksheet[cellAddress].s = HEADER_STYLE;
  }

  // Índice de columna de Estado
  const stateColIndex = headers.indexOf('Estado');

  // Aplicar estilos a datos (alternando colores + color de estado)
  for (let row = 1; row < data.length + 1; row++) {
    const prospect = prospects[row - 1];
    const status = statusById.get(prospect.statusId);
    const statusColor = status?.color ? hexToRgb(status.color) : 'D3D3D3';

    for (let col = 0; col < headers.length; col++) {
      const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
      if (!worksheet[cellAddress]) worksheet[cellAddress] = {};

      // Si es la columna de Estado, aplicar color del estado
      if (col === stateColIndex && status?.color) {
        const baseStyle = row % 2 === 0 ? ALTERNATE_STYLE : DATA_STYLE;
        worksheet[cellAddress].s = {
          ...baseStyle,
          fill: { fgColor: { rgb: statusColor } },
          font: { color: { rgb: 'FFFFFF' }, bold: true },
          alignment: { horizontal: 'center', vertical: 'center' },
        };
      } else {
        worksheet[cellAddress].s = row % 2 === 0 ? ALTERNATE_STYLE : DATA_STYLE;
      }
    }
  }

  // Configurar ancho de columnas basado en contenido
  worksheet['!cols'] = headers.map((h, idx) => {
    let maxLength = h.length + 2;

    // Para columna de Mensaje (plantillas), permitir más ancho
    if (h === 'Mensaje' || h === 'Descripción') {
      maxLength = Math.min(50, Math.max(maxLength, 30));
    }
    // Para columna de Email
    else if (h === 'Email') {
      maxLength = Math.min(30, Math.max(maxLength, 20));
    }
    // Para columna de Teléfono
    else if (h === 'Teléfono') {
      maxLength = Math.min(15, Math.max(maxLength, 15));
    }
    // Para otras columnas
    else {
      maxLength = Math.min(Math.max(maxLength, 15), 30);
    }

    return { wch: maxLength };
  });

  // Congelar primera fila
  worksheet['!freeze'] = { xSplit: 0, ySplit: 1 };

  // Agregar filtro automático
  if (data.length > 0) {
    worksheet['!autofilter'] = { ref: XLSX.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: data.length, c: headers.length - 1 } }) };
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Clientes');

  XLSX.writeFile(workbook, filename);
}

/**
 * Convierte un color hex (#RRGGBB) a RGB sin el #.
 */
function hexToRgb(hex: string): string {
  // Remover el # si existe
  const color = hex.replace('#', '');
  // Si ya es un valor RGB válido, retornarlo en mayúsculas
  if (/^[0-9A-F]{6}$/i.test(color)) {
    return color.toUpperCase();
  }
  // Fallback a gris si no es válido
  return 'D3D3D3';
}
