import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formatea un número plano como plata colombiana para mostrar: 200000 → "$200.000".
 * Solo para display — el valor real (RTDB, formularios) siempre queda como number
 * limpio, sin puntos ni signo. Ver también `MoneyInputDirective` para inputs editables.
 */
@Pipe({ name: 'money', standalone: true })
export class MoneyPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) return '—';
    return `$${value.toLocaleString('es-CO')}`;
  }
}
