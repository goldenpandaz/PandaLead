import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import { extractEmail, extractPhone, extractWebsite, firstMeaningfulLine, normalizeName } from './extraction.utils';

/**
 * Página de empresa o perfil de LinkedIn: nombre en la primera línea, la segunda
 * línea suele ser el rubro/headline ("Agencia de marketing digital").
 */
@Injectable({ providedIn: 'root' })
export class LinkedInParser implements SourceParser {
  readonly source = CaptureSource.LinkedIn;

  parse(ocrText: string): ParsedProspectData {
    const lines = ocrText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length >= 2);

    const name = lines[0] ?? '';
    const category = lines[1];

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      linkedin: name,
      category,
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      source: this.source,
    };
  }
}
