/**
 * Recorta al centro (cuadrado) y reduce una imagen a `size`×`size` px, y la devuelve
 * como data URL JPEG. Mantiene la foto de perfil en unos pocos KB para guardarla
 * directo en la base. Rechaza si el archivo no es una imagen legible.
 */
export async function resizeImageToDataUrl(file: File, size = 256, quality = 0.85): Promise<string> {
  if (!file.type.startsWith('image/')) throw new Error('El archivo no es una imagen.');

  const bitmap = await createImageBitmap(file);
  try {
    const side = Math.min(bitmap.width, bitmap.height);
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('No se pudo procesar la imagen.');
    context.drawImage(bitmap, (bitmap.width - side) / 2, (bitmap.height - side) / 2, side, side, 0, 0, size, size);
    return canvas.toDataURL('image/jpeg', quality);
  } finally {
    bitmap.close();
  }
}
