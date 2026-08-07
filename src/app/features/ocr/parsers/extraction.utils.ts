/**
 * Extractores de campos comunes, reutilizados por todos los parsers de origen
 * (.docs/architecture.md §8). El texto que viene de OCR es ruidoso — estas
 * funciones devuelven el mejor candidato encontrado, nunca lanzan si no
 * encuentran nada. La vista previa editable es la que corrige lo que falle.
 */

export { normalizeName } from '../../../shared/utils/normalize.util';

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// Teléfono: acepta +54 9 11 1234-5678, (011) 4444-5555, 11 2345 6789, etc.
// Al menos 6 dígitos en total para no matchear horarios/cantidades sueltas.
// Ojo: usa " \t" en vez de "\s" a propósito — "\s" también matchea saltos de
// línea, lo que dejaba "pegar" dígitos de dos líneas distintas como si fueran
// un solo teléfono (pasaba con horarios/códigos postales pegados al número real).
const PHONE_RE = /(\+?\d[\d \t().-]{5,}\d)/;

const URL_RE = /(https?:\/\/[^\s]+|(?:www\.)?[a-z0-9-]+\.[a-z]{2,}(?:\/[^\s]*)?)/i;

const SOCIAL_DOMAINS = ['instagram.com', 'facebook.com', 'fb.com', 'tiktok.com', 'youtube.com', 'youtu.be', 'linkedin.com', 'wa.me', 'whatsapp.com'];

export function extractEmail(text: string): string | undefined {
  return text.match(EMAIL_RE)?.[0];
}

export function extractPhone(text: string): string | undefined {
  const candidates = text
    .split('\n')
    .filter((line) => !line.includes('$')) // rangos de precio ("$60.000-120.000") no son teléfono
    .map((line) => line.match(PHONE_RE)?.[0])
    .filter((match): match is string => !!match)
    // Un dígito sueltito pegado al final después de un espacio suele ser ruido de
    // OCR (típicamente un ícono junto al número, tipo el de "llamar", mal leído
    // como "1") — no un dígito real del teléfono. Un teléfono real nunca termina
    // en un grupo de un solo dígito separado por espacio.
    .map((match) => match.replace(/[ \t]\d$/, ''))
    .filter((match) => {
      const digits = match.replace(/\D/g, '');
      // Descarta matches de pocos dígitos reales (separadores sueltos) o demasiados
      // (probablemente un ID/código, no un teléfono).
      return digits.length >= 6 && digits.length <= 15;
    });

  // Con código de país (+57...) es la señal más confiable de que es realmente
  // un teléfono — se prefiere sobre cualquier otro número suelto en el texto.
  const best = candidates.find((c) => c.trim().startsWith('+')) ?? candidates[0];
  return best?.trim();
}

/** Sitio web propio del negocio — excluye dominios de redes sociales conocidos,
 * esos van a sus campos específicos (instagram, facebook, etc.). */
export function extractWebsite(text: string): string | undefined {
  const candidates = text.match(new RegExp(URL_RE, 'gi')) ?? [];
  return candidates.find((url) => !SOCIAL_DOMAINS.some((domain) => url.toLowerCase().includes(domain)));
}

export function extractHandle(text: string, domain: RegExp): string | undefined {
  return text.match(domain)?.[1];
}

/** @usuario tipo Instagram/TikTok — "@" seguido de letras/números/puntos/guión bajo. */
export function extractAtHandle(text: string): string | undefined {
  const match = text.match(/@([a-zA-Z0-9._]{2,30})/);
  return match?.[1];
}

/** Rating tipo "4.5" o "4,5" seguido opcionalmente de estrella/paréntesis con reseñas. */
export function extractRatingAndReviews(text: string): { rating?: number; reviewCount?: number } {
  const ratingMatch = text.match(/([0-5][.,]\d)\s*(?:★|⭐)?/);
  const rating = ratingMatch ? Number(ratingMatch[1].replace(',', '.')) : undefined;

  const reviewsMatch = text.match(/\((\d[\d.,]*)\)|(\d[\d.,]*)\s*rese(?:ñ|n)as/i);
  const reviewRaw = reviewsMatch?.[1] ?? reviewsMatch?.[2];
  const reviewCount = reviewRaw ? Number(reviewRaw.replace(/[.,]/g, '')) : undefined;

  return { rating, reviewCount };
}

/** Primera línea "seria" — heurística de "nombre" cuando el origen no tiene una
 * posición más confiable para el título. NO alcanza con "tenga letras/números":
 * las tarjetas de Google Maps suelen traer una ilustración decorativa arriba
 * (edificios, mapa, etc.) que Tesseract intenta leer como texto y devuelve como
 * ruido tipo "TIAS e", "4] Pe EA al" — antes de la línea real del nombre.
 * Se prioriza la primera línea con alguna palabra de 5+ letras seguidas (los
 * nombres reales casi siempre tienen una así — "Barbería", "Restaurante"; el
 * ruido de OCR casi nunca supera 3-4 letras seguidas). Si ninguna línea cumple
 * eso (nombre corto legítimo, ej. "Bar Sol"), cae a la primera con letras/números
 * nomás — mejor eso que devolver vacío. */
export function firstMeaningfulLine(text: string): string | undefined {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length >= 2 && /[a-zA-Z0-9]/.test(line));

  const solidLine = lines.find((line) => /[a-zA-ZÀ-ÿ]{5,}/.test(line));
  return solidLine ?? lines[0];
}

// Se usa para descartar la línea de horario ("Cerrado · Abre mañana a las 9 a.m.")
// como si fuera la de categoría — también usa "·" y si no se filtra, gana esa
// por aparecer primero en el texto.
const SCHEDULE_LINE_RE = /cerrado|abierto|\babre\b|\bcierra\b|\bhoras?\b|\d\s*[ap]\.?\s?m\.?/i;

/** Categoría + localidad de una tarjeta de Google — dos formatos frecuentes según
 * de dónde salga la captura: ficha completa de Maps ("Restaurante · Av. Siempre
 * Viva 742") o panel de búsqueda/knowledge panel ("Barbero en Popayán"). Se prueba
 * el primero y, si no aparece (o lo único con "·" es el horario), el segundo. */
export function extractCategoryAndLocality(text: string): { category?: string; locality?: string } {
  const lines = text.split('\n').map((line) => line.trim());

  const dotLine = lines.find((line) => line.includes('·') && !SCHEDULE_LINE_RE.test(line));
  if (dotLine) {
    const [category, locality] = dotLine.split('·').map((s) => s.trim());
    return { category, locality };
  }

  // Excluye líneas con ":" — tarjetas tipo panel de detalle usan "Etiqueta: valor"
  // ("Ubicado en: Centro Comercial X", "Dirección: ...") y ahí "en" no separa
  // categoría de ciudad, es parte de la etiqueta. Una línea real de categoría
  // ("Barbero en Popayán") nunca lleva ":".
  const enLine = lines.find(
    (line) => /^.{2,40}\s+en\s+.{2,40}$/i.test(line) && !SCHEDULE_LINE_RE.test(line) && !line.includes(':'),
  );
  const enMatch = enLine?.match(/^(.{2,40}?)\s+en\s+(.{2,40})$/i);
  if (enMatch) return { category: enMatch[1].trim(), locality: enMatch[2].trim() };

  return {};
}
