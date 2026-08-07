import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import { extractEmail, extractPhone, extractRatingAndReviews, extractWebsite, firstMeaningfulLine, normalizeName } from './extraction.utils';

/**
 * Página de Facebook: nombre suele ser la primera línea. La info de contacto
 * (teléfono/web/email) aparece en el bloque "Información" cuando está visible
 * en la captura — se extrae con los mismos regex genéricos.
 */
@Injectable({ providedIn: 'root' })
export class FacebookParser implements SourceParser {
  readonly source = CaptureSource.Facebook;

  parse(ocrText: string): ParsedProspectData {
    const name = firstMeaningfulLine(ocrText) ?? '';
    const { rating, reviewCount } = extractRatingAndReviews(ocrText);

    // Línea típica de categoría: "· Restaurante ·" o "Página · Tienda de ropa"
    const categoryLine = ocrText.split('\n').find((line) => /^(página|page)?\s*·/i.test(line.trim()));
    const category = categoryLine?.replace(/·/g, '').trim() || undefined;

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      facebook: name, // heurística inicial: el nombre de página suele ser el identificador visible
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      category,
      rating,
      reviewCount,
      source: this.source,
    };
  }
}
