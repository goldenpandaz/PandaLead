/**
 * Perfil del usuario dueño de la cuenta. Vive en `/tenants/{uid}/profile/main`
 * (un solo documento). La foto se guarda como data URL ya reducida (ver
 * `resizeImageToDataUrl`) — chica a propósito, así no hace falta Firebase Storage.
 */
export interface UserProfile {
  id: string;
  displayName?: string;
  /** Data URL (JPEG) de la foto; vacío o ausente si no hay. */
  photo?: string;
}
