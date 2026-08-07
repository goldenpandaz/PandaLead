import { Injectable } from '@angular/core';

/**
 * Normaliza los 3 puntos de entrada de imagen (CTRL+V, drag&drop, seleccionar
 * archivo) a un `Blob` único — el resto del flujo de captura no necesita saber
 * de dónde vino la imagen. Ver .docs/architecture.md §9.
 */
@Injectable({ providedIn: 'root' })
export class ImageCaptureService {
  fromClipboardEvent(event: ClipboardEvent): File | null {
    const items = event.clipboardData?.items;
    if (!items) return null;
    for (const item of Array.from(items)) {
      if (item.type.startsWith('image/')) {
        return item.getAsFile();
      }
    }
    return null;
  }

  fromDropEvent(event: DragEvent): File | null {
    const files = event.dataTransfer?.files;
    if (!files?.length) return null;
    return Array.from(files).find((file) => file.type.startsWith('image/')) ?? null;
  }

  fromFileList(files: FileList | null): File | null {
    if (!files?.length) return null;
    return Array.from(files).find((file) => file.type.startsWith('image/')) ?? null;
  }

  toObjectUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

  revokeObjectUrl(url: string): void {
    URL.revokeObjectURL(url);
  }
}
