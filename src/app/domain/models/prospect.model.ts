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

  /** Único número de contacto — se usa tanto para llamar como para WhatsApp
   * (se decidió no duplicar campo: en la práctica casi siempre es el mismo). */
  phone?: string;
  email?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  linkedin?: string;

  /** Ciudad + dirección combinadas en un solo campo libre — no ameritaba dos. */
  locality?: string;
  /** Rubro del negocio del cliente (Restaurante, Abogado…) — no confundir con
   * `Project.serviceName` (lo que PandaLead le vende). Se elige de `config/categories`,
   * pero se guarda el nombre acá (no el id) para no depender de un join al listar/filtrar. */
  category?: string;

  /** Referencia a `config/statuses/{id}` — los estados son configurables, no un enum fijo. */
  statusId: string;
  source: CaptureSource;
  favorite: boolean;

  score?: number;
  rating?: number;
  reviewCount?: number;
  schedule?: string;

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
