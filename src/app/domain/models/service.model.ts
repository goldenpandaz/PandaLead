/**
 * Servicio del catálogo propio — lo que PandaLead vende (no confundir con
 * `Prospect.category`, que es el rubro del NEGOCIO del cliente). Vive en
 * `/tenants/{uid}/config/services/{id}`. Se elige por nombre al armar el
 * `Project` de un cliente; el precio se copia al proyecto en ese momento
 * (ver `Project.servicePrice`) para que cambios futuros acá no reescriban
 * ventas ya cerradas.
 */
export interface ServiceConfig {
  id: string;
  name: string;
  description?: string;
  price?: number;
}
