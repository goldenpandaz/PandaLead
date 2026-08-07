import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Capture } from '../../domain/models/capture.model';
import { CaptureSource } from '../../domain/enums/capture-source.enum';
import { BaseRepository } from './base.repository';

const COLLECTION = 'captures';

/**
 * Registro de "se capturó algo": origen + texto OCR extraído + fecha. La imagen
 * en sí es un insumo transitorio que solo vive en memoria del navegador mientras
 * corre el OCR (`ImageCaptureService` + object URL) — nunca se sube a ningún
 * lado. Lo único que se persiste es el dato ya extraído, no la foto. Decisión
 * explícita del usuario: menos piezas, sin Storage, sin CORS que configurar.
 * Ver .docs/architecture.md §9.
 */
@Injectable({ providedIn: 'root' })
export class CaptureRepository extends BaseRepository {
  watchForProspect(prospectId: string): Observable<Capture[]> {
    return this.sync.watchCollection<Capture>(`${COLLECTION}:${prospectId}`, this.tenantPath(COLLECTION, prospectId));
  }

  async save(prospectId: string, source: CaptureSource, ocrText: string): Promise<string> {
    const id = this.generateId();
    const capture: Capture = { id, prospectId, source, ocrText, createdAt: Date.now() };
    await this.sync.write(`${COLLECTION}:${prospectId}`, id, this.tenantPath(COLLECTION, prospectId, id), 'set', capture);
    return id;
  }
}
