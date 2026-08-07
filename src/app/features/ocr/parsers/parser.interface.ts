import { InjectionToken } from '@angular/core';

import { CaptureSource } from '../../../domain/enums/capture-source.enum';
import { Prospect } from '../../../domain/models/prospect.model';

/**
 * Contrato que implementa cada parser de origen. Strategy pattern — agregar un
 * origen nuevo es crear un archivo que implemente esto y registrarlo con
 * `SOURCE_PARSER` (multi-provider), sin tocar el registry. Ver .docs/architecture.md §8.
 */
/**
 * El parser tampoco decide `statusId` ni `favorite` — son defaults que aplica
 * el flujo de creación, no algo que se lea de una captura. `category` sí lo
 * puede completar directo (es texto libre, no una referencia a configurar).
 */
export type ParsedProspectData = Partial<Prospect> & {
  rawText: string;
};

export interface SourceParser {
  readonly source: CaptureSource;
  parse(ocrText: string): ParsedProspectData;
}

// Tipado como array a propósito: se registra con `multi: true` (ver
// parser.providers.ts), así que en runtime `inject(SOURCE_PARSER)` SIEMPRE
// devuelve `SourceParser[]`, nunca un `SourceParser` suelto.
export const SOURCE_PARSER = new InjectionToken<SourceParser[]>('SOURCE_PARSER');
