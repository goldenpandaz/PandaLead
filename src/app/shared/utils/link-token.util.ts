/** Largo del token de conexión (~70 bits con este alfabeto). Las reglas de la base aceptan de 6 a 64. */
export const LINK_TOKEN_LENGTH = 12;

// Sin caracteres que se confunden al leer o tipear (0/O, 1/l/I).
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';

/** Token aleatorio criptográficamente seguro (`crypto.getRandomValues`), solo letras y números. */
export function generateLinkToken(length: number = LINK_TOKEN_LENGTH): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join('');
}
