/**
 * Plantilla de mensaje de WhatsApp, administrable. Vive en `/tenants/{uid}/config/templates/{id}`.
 * `body` soporta variables tipo `{{nombre}}` interpoladas antes de abrir WhatsApp Web.
 */
export interface MessageTemplate {
  id: string;
  name: string;
  category: string;
  body: string;
  variables: string[];
}
