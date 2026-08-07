import { Injectable } from '@angular/core';
import { createWorker } from 'tesseract.js';

/**
 * Wrapper de Tesseract.js — OCR 100% local, sin IA paga (.docs/architecture.md §9).
 * Tesseract corre su reconocimiento en un worker propio, así que no bloquea el
 * hilo principal aunque no usemos Angular Web Workers explícitos.
 *
 * El worker se crea una sola vez (carga el modelo de idioma, que pesa) y se
 * reutiliza entre capturas — crearlo por cada imagen sería lento e innecesario.
 */
@Injectable({ providedIn: 'root' })
export class OcrService {
  private workerPromise: ReturnType<typeof createWorker> | null = null;

  private getWorker() {
    if (!this.workerPromise) {
      // Assets bundleados en /public (no CDN externo): la app tiene que poder
      // hacer OCR sin internet desde el primer uso, no solo después de una
      // primera corrida online — coherente con todo el esfuerzo de offline-first
      // del SyncEngine. Ver .docs/architecture.md §9.
      this.workerPromise = createWorker(
        'spa+eng', // mezcla contenido en español con UI a veces en inglés (Followers, Posts, etc.)
        undefined,
        {
          workerPath: '/tesseract/worker.min.js',
          corePath: '/tesseract/tesseract-core-simd-lstm.wasm.js',
          langPath: '/tessdata',
        },
      );
    }
    return this.workerPromise;
  }

  async recognize(image: Blob | File | string): Promise<string> {
    const worker = await this.getWorker();
    const { data } = await worker.recognize(image);
    return data.text;
  }

  /** Libera el worker (memoria) — llamar cuando se sale del flujo de captura por un buen rato. */
  async terminate(): Promise<void> {
    if (!this.workerPromise) return;
    const worker = await this.workerPromise;
    await worker.terminate();
    this.workerPromise = null;
  }
}
