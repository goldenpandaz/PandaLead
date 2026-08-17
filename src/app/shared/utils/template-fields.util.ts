import { Prospect } from '../../domain/models/prospect.model';
import { Project } from '../../domain/models/project.model';

/**
 * Variables `{{var}}` dentro del body de una plantilla — un solo lugar para
 * detectarlas (Settings, importación masiva) e interpolarlas (`WhatsappService`).
 * Deliberadamente NO es un motor de templating genérico: cada variable soportada
 * mapea 1:1 contra un campo real de `Prospect`/`Project` que ya existe en el
 * modelo, nada inventado ni configurable aparte. Si el día de mañana se agrega
 * un campo nuevo al prospecto/proyecto que tenga sentido usar en un mensaje,
 * alcanza con sumar una entrada acá.
 *
 * Nombres en minúscula y sin tildes a propósito: `\w` en la regex de abajo no
 * matchea acentos, así que `{{depósito}}` nunca calzaría — se usan variantes
 * ASCII (`deposito`) para evitar ese problema de raíz en vez de parchear la regex.
 */
const VARIABLE_RE = /\{\{\s*(\w+)\s*\}\}/g;

type FieldResolver = (prospect: Prospect, project: Project | null) => string | undefined;

function formatMoney(value: number | null | undefined): string | undefined {
  return value == null ? undefined : `$${value.toLocaleString('es-CO')}`;
}

const TEMPLATE_FIELDS: Record<string, FieldResolver> = {
  nombre: (p) => p.name,
  telefono: (p) => p.phone,
  email: (p) => p.email,
  sitio: (p) => p.website,
  instagram: (p) => p.instagram,
  facebook: (p) => p.facebook,
  tiktok: (p) => p.tiktok,
  youtube: (p) => p.youtube,
  linkedin: (p) => p.linkedin,
  localidad: (p) => p.locality,
  categoria: (p) => p.category,
  servicio: (_p, proj) => proj?.serviceName,
  precio: (_p, proj) => formatMoney(proj?.servicePrice),
  deposito: (_p, proj) => formatMoney(proj?.deposit),
  saldo: (_p, proj) => formatMoney(proj?.balance),
  dominio: (_p, proj) => proj?.domain,
  hosting: (_p, proj) => proj?.hosting,
  vencimiento: (_p, proj) => proj?.dueDate,
};

/** Lista de nombres soportados, para mostrar como ayuda en la UI (Settings, import). */
export const SUPPORTED_TEMPLATE_VARIABLES = Object.keys(TEMPLATE_FIELDS);

/** Nombres de variable únicos usados en un body (minúscula, sin duplicados). */
export function extractVariables(body: string): string[] {
  const names = [...body.matchAll(VARIABLE_RE)].map((m) => m[1].toLowerCase());
  return [...new Set(names)];
}

/** `{{...}}` que no matchean ningún campo soportado — se usa para avisar ANTES de
 * guardar/importar (Settings, vista previa de import), no cuando el mensaje ya
 * salió con las llaves literales adentro hacia un prospecto real. */
export function findUnknownVariables(body: string): string[] {
  return extractVariables(body).filter((name) => !(name in TEMPLATE_FIELDS));
}

/**
 * Reemplaza cada `{{variable}}` conocida por el valor real del prospecto/proyecto.
 * Si la variable no es conocida, o es conocida pero no hay valor cargado (ej.
 * `{{servicio}}` sin proyecto todavía), se deja el `{{...}}` tal cual — nunca se
 * inventa un valor ni se reemplaza por vacío en silencio (eso pasaría más
 * desapercibido que dejar la llave a la vista, que el usuario nota antes de enviar).
 */
export function interpolateTemplate(body: string, prospect: Prospect, project: Project | null): string {
  return body.replace(VARIABLE_RE, (match, rawName: string) => {
    const resolver = TEMPLATE_FIELDS[rawName.toLowerCase()];
    const value = resolver?.(prospect, project);
    return value ? value : match;
  });
}
