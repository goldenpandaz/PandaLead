import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(phone: string | null | undefined): string {
    if (!phone) return '—';
    // Formato: +57 3XXXXXXXX (separa prefijo país del resto)
    const match = phone.match(/^(\+\d{2})(.*)$/);
    if (match) {
      return `${match[1]} ${match[2]}`;
    }
    return phone;
  }
}
