import { Injectable, inject } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { ParsedProspectData, SOURCE_PARSER, SourceParser } from './parser.interface';

/**
 * Arma `Map<CaptureSource, SourceParser>` a partir de los providers `multi: true`
 * registrados en `provideParsers()`. Sumar un origen nuevo = crear el parser +
 * agregar su provider ahí — este registry no cambia. Ver .docs/architecture.md §8.
 */
@Injectable({ providedIn: 'root' })
export class ParserRegistryService {
  private readonly parsers = inject(SOURCE_PARSER, { optional: true }) ?? [];
  private readonly bySource = new Map<CaptureSource, SourceParser>(this.parsers.map((p) => [p.source, p]));

  parse(source: CaptureSource, ocrText: string): ParsedProspectData {
    const parser = this.bySource.get(source) ?? this.bySource.get(CaptureSource.Other);
    if (!parser) {
      throw new Error(`ParserRegistryService: no hay parser para "${source}" ni fallback genérico registrado.`);
    }
    return parser.parse(ocrText);
  }
}
