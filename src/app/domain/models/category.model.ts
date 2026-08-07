/**
 * Categoría configurable — el rubro del NEGOCIO del cliente (Restaurante,
 * Abogado…). Vive en `/tenants/{uid}/config/categories/{id}`. No confundir
 * con `ServiceConfig`, que es lo que PandaLead vende. Se elige por nombre al
 * cargar/editar un prospecto (ver `Prospect.category`).
 */
export interface CategoryConfig {
  id: string;
  name: string;
}
