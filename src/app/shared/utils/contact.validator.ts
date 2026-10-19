import { AbstractControl, ValidationErrors } from '@angular/forms';

import { normalizeWhatsappUser } from './phone.util';

/**
 * Para un FormGroup con `localNumber` y `whatsappUser`: exige al menos uno de los dos.
 * El teléfono solo es obligatorio si no hay usuario de WhatsApp.
 */
export function phoneOrWhatsappUser(group: AbstractControl): ValidationErrors | null {
  const phone = String(group.get('localNumber')?.value ?? '').replace(/\D/g, '');
  const user = normalizeWhatsappUser(group.get('whatsappUser')?.value);
  return phone || user ? null : { contactRequired: true };
}
