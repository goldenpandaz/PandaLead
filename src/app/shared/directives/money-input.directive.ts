import { Directive, ElementRef, HostListener, Renderer2, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Input de plata: mientras tipeás muestra separador de miles ("250.000"), pero
 * el valor real que viaja por ngModel/formControlName siempre es un number
 * limpio (250000) — el punto es solo maquillaje visual, nunca llega al back.
 * Usar junto con `<input matInput type="text" inputmode="numeric" moneyInput>`
 * y (opcional) `<span matTextPrefix>$&nbsp;</span>` para el signo peso.
 */
@Directive({
  selector: 'input[moneyInput]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoneyInputDirective),
      multi: true,
    },
  ],
})
export class MoneyInputDirective implements ControlValueAccessor {
  private readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);

  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', this.format(value));
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    const digits = raw.replace(/\D/g, '');
    const value = digits ? Number(digits) : null;
    // Reformatea en el momento — si no, "250" no se convierte en "250.000" hasta perder el foco.
    this.renderer.setProperty(this.el.nativeElement, 'value', this.format(value));
    this.onChange(value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  private format(value: number | null): string {
    return value == null ? '' : value.toLocaleString('es-CO');
  }
}
