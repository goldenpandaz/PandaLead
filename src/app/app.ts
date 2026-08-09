import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from './core/auth/auth.service';
import { InstallPromptService } from './core/pwa/install-prompt.service';

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
  // Inyectado acá (no solo donde se usa) a propósito — el constructor de este
  // servicio engancha el listener de `beforeinstallprompt`, y ese evento se
  // pierde para siempre si nadie lo está escuchando cuando dispara. `App` es
  // lo primero que Angular crea, así que es el lugar más temprano posible.
  protected readonly installPrompt = inject(InstallPromptService);
  private readonly router = inject(Router);

  readonly collapsed = signal(false);
  /** Solo tiene efecto en mobile (ver media query en app.scss) — el sidebar
   * ahí es un drawer superpuesto, no un panel que reduce el ancho vivible. */
  readonly mobileNavOpen = signal(false);

  toggleCollapsed(): void {
    this.collapsed.set(!this.collapsed());
  }

  toggleMobileNav(): void {
    const opening = !this.mobileNavOpen();
    this.mobileNavOpen.set(opening);
    // El drawer mobile es "todo o nada" — no tiene sentido el modo solo-íconos
    // ahí (ver media query en app.scss). Si venía contraído de una sesión de
    // escritorio previa, se expande solo al abrir.
    if (opening) this.collapsed.set(false);
  }

  closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  async logout(): Promise<void> {
    await this.auth.signOut();
    await this.router.navigateByUrl('/login');
  }
}
