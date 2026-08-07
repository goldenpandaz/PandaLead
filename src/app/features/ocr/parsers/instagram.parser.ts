import { Injectable } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SourceParser } from './parser.interface';
import { extractAtHandle, extractEmail, extractPhone, extractWebsite, normalizeName } from './extraction.utils';

/**
 * Perfil de Instagram: el handle "@usuario" es el dato más confiable (regex
 * directo). El nombre visible suele ser la primera línea que NO es el handle
 * ni un contador de seguidores/publicaciones.
 */
@Injectable({ providedIn: 'root' })
export class InstagramParser implements SourceParser {
  readonly source = CaptureSource.Instagram;

  parse(ocrText: string): ParsedProspectData {
    const handle = extractAtHandle(ocrText);
    const statsLine = /^\d[\d.,]*\s*(posts|publicaciones|seguidores|followers|following|siguiendo)/i;

    const name =
      ocrText
        .split('\n')
        .map((line) => line.trim())
        .find((line) => line.length >= 2 && !line.startsWith('@') && !statsLine.test(line)) ?? handle ?? '';

    return {
      rawText: ocrText,
      name,
      normalizedName: normalizeName(name),
      instagram: handle,
      phone: extractPhone(ocrText),
      email: extractEmail(ocrText),
      website: extractWebsite(ocrText),
      source: this.source,
    };
  }
}
