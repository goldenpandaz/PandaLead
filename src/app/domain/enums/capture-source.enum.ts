/**
 * Origen de una captura de pantalla. Cada valor debe tener un parser
 * correspondiente registrado en `features/ocr/parsers/`.
 */
export enum CaptureSource {
  GoogleMaps = 'google_maps',
  Facebook = 'facebook',
  Instagram = 'instagram',
  TikTok = 'tiktok',
  YouTube = 'youtube',
  LinkedIn = 'linkedin',
  Import = 'import',
  Other = 'other',
}
