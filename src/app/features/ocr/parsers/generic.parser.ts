import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import { extractAtHandle, extractEmail, extractPhone, extractWebsite, firstMeaningfulLine, normalizeName } from './extraction.utils';

/**
 * Fallback para "Otro" — no asume ninguna estructura de plataforma, solo aplica
 * los extractores universales. También sirve como red de contención si un
 * parser específico no encuentra nada útil (.docs/architecture.md §15, riesgo
 * de OCR irregular).
 */
@Injectable({ providedIn: 'root' })
export class GenericParser implements SourceParser {
  readonly source = CaptureSource.Other;

  parse(ocrText: string): ParsedProspectData {
    const name = firstMeaningfulLine(ocrText) ?? '';

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      instagram: extractAtHandle(ocrText),
      source: this.source,
    };
  }
}
