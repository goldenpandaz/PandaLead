import { CaptureSource } from '../enums/capture-source.enum';

/**
 * Registro de que se hizo una captura — origen, texto OCR extraído, fecha. NO
 * guarda la imagen: es un insumo transitorio, nunca se sube a ningún lado (sin
 * Storage, decisión explícita). Vive en `/tenants/{uid}/captures/{prospectId}/{captureId}`.
 */
export interface Capture {
  id: string;
  prospectId: string;
  source: CaptureSource;
  ocrText: string;
  createdAt: number;
}
