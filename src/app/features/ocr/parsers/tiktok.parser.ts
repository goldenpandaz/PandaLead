import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import { extractAtHandle, extractEmail, extractPhone, extractWebsite, normalizeName } from './extraction.utils';

/** Perfil de TikTok: misma estructura que Instagram (@handle + nombre + bio). */
@Injectable({ providedIn: 'root' })
export class TikTokParser implements SourceParser {
  readonly source = CaptureSource.TikTok;

  parse(ocrText: string): ParsedProspectData {
    const handle = extractAtHandle(ocrText);
    const statsLine = /^\d[\d.,]*\s*(m\s*)?(seguidores|followers|me\s*gusta|likes|following|siguiendo)/i;

    const name =
      ocrText
        .split('\n')
        .map((line) => line.trim())
        .find((line) => line.length >= 2 && !line.startsWith('@') && !statsLine.test(line)) ?? handle ?? '';

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      tiktok: handle,
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      source: this.source,
    };
  }
}
