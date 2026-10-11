import { CaptureSource } from '../enums/capture-source.enum';

/**
 * Campos de listado/filtro de un prospecto. Vive en `/tenants/{uid}/prospects/{id}`.
 * Deliberadamente NO incluye descripción ni texto OCR completo — eso vive en
 * `ProspectDetails`, separado, para que la tabla principal no arrastre texto largo
 * en cada fetch. Ver .docs/architecture.md §6.
 */
export interface Prospect {
  id: string;
  name: string;
  /** Nombre normalizado (lowercase, sin acentos/espacios extra) — usado para dedup e índices. */
  normalizedName: string;

  /** Único número de contacto — se usa tanto para llamar como para WhatsApp */
  phone?: string;
  /** Rubros del negocio del cliente (al menos uno) — nombres elegidos de `config/categories`. */
  categories: string[];

  /** Referencia a `config/statuses/{id}` — los estados son configurables, no un enum fijo. */
  statusId: string;
  /** Referencia al servicio/plan que se le está brindando */
  serviceId?: string;

  source: CaptureSource;
  favorite: boolean;
  archived: boolean;

  createdAt: number;
  updatedAt: number;
  lastContactAt?: number;
  nextFollowupAt?: number;
}

/**
 * Datos extendidos de un prospecto, separados de `Prospect` por tamaño
 * (texto OCR completo puede ser largo). Vive en `/tenants/{uid}/prospectDetails/{id}`.
 */
export interface ProspectDetails {
  prospectId: string;
  description?: string;
  ocrRawText: string;
}
