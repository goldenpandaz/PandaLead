import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ACCENT_THEMES, UiStateService } from '../../core/ui-state.service';
import { CHANGELOG, ChangelogEntry } from '../../core/changelog';
import { APP_VERSION } from '../../core/version';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preferences.html',
  styleUrl: './preferences.scss',
})
export class Preferences {
  uiState = inject(UiStateService);
  themes = ACCENT_THEMES;
  changelog = CHANGELOG;
  version = APP_VERSION;

  notaAbierta = signal<ChangelogEntry | null>(null);

  @HostListener('document:keydown.escape')
  cerrarNota(): void {
    this.notaAbierta.set(null);
  }
}
