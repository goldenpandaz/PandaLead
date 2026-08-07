import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from './core/auth/auth.service';

/**
 * El shell (sidebar + contenido) se arma con flexbox propio, NO con
 * `mat-sidenav-container` — no necesitamos overlay/drawer deslizable (el
 * sidebar siempre está "side, opened", solo cambia de ancho), y pelear con el
 * posicionamiento interno de Material sin poder inspeccionarlo en vivo costó
 * más de lo que valía. Layout simple y 100% bajo control propio.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatListModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly collapsed = signal(false);

  toggleCollapsed(): void {
    this.collapsed.set(!this.collapsed());
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
    await this.router.navigateByUrl('/login');
  }
}
