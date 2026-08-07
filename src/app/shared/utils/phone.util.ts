import { DEFAULT_DIAL_CODE, DIAL_CODES } from '../constants/dial-codes';

/** Arma el teléfono completo que se guarda en `Prospect.phone`. */
export function joinPhone(dialCode: string, localNumber: string): string {
  const digits = localNumber.replace(/\D/g, '');
  if (!digits) return '';
  return `${dialCode}${digits}`;
}

/**
 * Separa un teléfono guardado (o extraído por OCR, con cualquier formato) en
 * indicativo + número local, para precargar los dos campos del form. Si no
 * reconoce ningún indicativo conocido al principio, devuelve el default y deja
 * el resto tal cual en `localNumber` — el usuario lo corrige si hace falta.
 */
export function splitPhone(phone: string | undefined): { dialCode: string; localNumber: string } {
  if (!phone) return { dialCode: DEFAULT_DIAL_CODE, localNumber: '' };

  const normalized = phone.trim().startsWith('+') ? phone.trim() : `+${phone.replace(/\D/g, '')}`;
  const match = [...DIAL_CODES].sort((a, b) => b.code.length - a.code.length).find((d) => normalized.startsWith(d.code));

  if (match) {
    return { dialCode: match.code, localNumber: normalized.slice(match.code.length).replace(/\D/g, '') };
  }
  return { dialCode: DEFAULT_DIAL_CODE, localNumber: phone.replace(/\D/g, '') };
}
