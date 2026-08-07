import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import { extractAtHandle, extractEmail, extractPhone, extractWebsite, firstMeaningfulLine, normalizeName } from './extraction.utils';

/** Canal de YouTube: nombre del canal + "@handle" + a veces web/email en la descripción. */
@Injectable({ providedIn: 'root' })
export class YouTubeParser implements SourceParser {
  readonly source = CaptureSource.YouTube;

  parse(ocrText: string): ParsedProspectData {
    const handle = extractAtHandle(ocrText);
    const name = firstMeaningfulLine(ocrText) ?? handle ?? '';

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      youtube: handle,
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      source: this.source,
    };
  }
}
