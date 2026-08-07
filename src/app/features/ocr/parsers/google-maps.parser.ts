import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import {
  extractCategoryAndLocality,
  extractEmail,
  extractPhone,
  extractRatingAndReviews,
  extractWebsite,
  firstMeaningfulLine,
  normalizeName,
} from './extraction.utils';

/**
 * Heurística para tarjetas/fichas de Google Maps: el nombre suele ser la primera
 * línea relevante, seguido de una línea de categoría (formato "Categoría ·
 * Dirección" en la ficha completa de Maps, o "Categoría en Ciudad" en el panel
 * de búsqueda/knowledge panel) y el rating con reseñas cerca. Primera pasada —
 * se refina con capturas reales; siempre queda editable antes de guardar.
 */
@Injectable({ providedIn: 'root' })
export class GoogleMapsParser implements SourceParser {
  readonly source = CaptureSource.GoogleMaps;

  parse(ocrText: string): ParsedProspectData {
    const name = firstMeaningfulLine(ocrText) ?? '';
    const { rating, reviewCount } = extractRatingAndReviews(ocrText);
    const { category, locality } = extractCategoryAndLocality(ocrText);

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      locality,
      category,
      rating,
      reviewCount,
      source: this.source,
    };
  }
}
