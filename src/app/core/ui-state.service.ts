import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AccentTheme = 'gold' | 'azul' | 'rosa';

export const ACCENT_THEMES: { id: AccentTheme; nombre: string; color: string }[] = [
  { id: 'gold', nombre: 'Dorado', color: '#e9c349' },
  { id: 'azul', nombre: 'Azul', color: '#4c9aff' },
  { id: 'rosa', nombre: 'Rosa', color: '#e879b9' },
];

/** Estado de UI transversal: color de acento (themes). */
@Injectable({ providedIn: 'root' })
export class UiStateService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  accentTheme = signal<AccentTheme>(this.readAccentTheme());

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;
      const theme = this.accentTheme();
      const root = document.documentElement;
      root.classList.toggle('theme-azul', theme === 'azul');
      root.classList.toggle('theme-rosa', theme === 'rosa');
      localStorage.setItem('accentTheme', theme);
      const color = ACCENT_THEMES.find((t) => t.id === theme)?.color;
      if (color) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
    });
  }

  private readAccentTheme(): AccentTheme {
    if (!this.isBrowser) return 'gold';
    const stored = localStorage.getItem('accentTheme');
    return stored === 'azul' || stored === 'rosa' ? (stored as AccentTheme) : 'gold';
  }
}
