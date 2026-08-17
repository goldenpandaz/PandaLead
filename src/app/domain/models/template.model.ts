/**
 * Plantilla de mensaje de WhatsApp, administrable. Vive en `/tenants/{uid}/config/templates/{id}`.
 * `body` soporta variables tipo `{{nombre}}` interpoladas antes de abrir WhatsApp Web
 * (ver `shared/utils/template-fields.util.ts` para la lista de campos soportados).
 */
export interface MessageTemplate {
  id: string;
  name: string;
  category: string;
  body: string;
  variables: string[];
  /** Atajo/código corto de origen (ej. "/precio") cuando la plantilla vino de una
   * importación masiva — solo referencia interna, no se muestra ni se edita a mano. */
  shortcut?: string;
}
