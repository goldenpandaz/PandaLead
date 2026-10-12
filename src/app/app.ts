import { Component, OnInit, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from './core/auth/auth.service';
import { InstallPromptService } from './core/pwa/install-prompt.service';
import { UserProfileService } from './core/profile/user-profile.service';
import { KontrolCashSyncService } from './core/sync/kontrol-cash-sync.service';
import { UiStateService } from './core/ui-state.service';
import { APP_VERSION } from './core/version';

/**
 * El shell (sidebar + contenido) se arma con flexbox propio, NO con
 * `mat-sidenav-container` — no necesitamos overlay/drawer deslizable (el
 * sidebar siempre está "side, opened", solo cambia de ancho), y pelear con el
 * posicionamiento interno de Material sin poder inspeccionarlo en vivo costó
 * más de lo que valía. Layout simple y 100% bajo control propio.
 *
 * El componente también inicia el monitor de inactividad (idle timeout) que
 * desconecta automáticamente al usuario tras 30 minutos sin interacción.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatListModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, OnDestroy {
  protected readonly auth = inject(AuthService);
  // Inyectado acá (no solo donde se usa) a propósito — el constructor de este
  // servicio engancha el listener de `beforeinstallprompt`, y ese evento se
  // pierde para siempre si nadie lo está escuchando cuando dispara. `App` es
  // lo primero que Angular crea, así que es el lugar más temprano posible.
  protected readonly installPrompt = inject(InstallPromptService);
  // Mismo motivo que installPrompt: el effect() de su constructor tiene que
  // arrancar apenas carga la app, no solo cuando el usuario abre el dashboard.
  private readonly kontrolCashSync = inject(KontrolCashSyncService);
  // UI state (temas de acento): el effect() aplica clases a <html> apenas carga.
  private readonly uiState = inject(UiStateService);
  private readonly router = inject(Router);

  protected readonly profile = inject(UserProfileService);

  protected readonly version = APP_VERSION;

  readonly collapsed = signal(false);
  /** Solo tiene efecto en mobile (ver media query en app.scss) — el sidebar
   * ahí es un drawer superpuesto, no un panel que reduce el ancho vivible. */
  readonly mobileNavOpen = signal(false);

  readonly logoSrc = computed(() => {
    const theme = this.uiState.accentTheme();
    if (theme === 'gold') return 'brand/wordmark.png';
    return `brand/wordmark${theme}.png`;
  });

  constructor() {
    // Effect: cuando el usuario se autentica, inicia el idle timeout (30 minutos).
    // Cuando se desautentica, detiene el timeout.
    effect(() => {
      const user = this.auth.currentUser();
      if (user) {
        this.auth.startIdleTimeout(30); // 30 minutos de inactividad
      } else {
        this.auth.stopIdleTimeout();
      }
    });
  }

  ngOnInit(): void {
    // Placeholder para inicializaciones futuras si se necesitan
  }

  ngOnDestroy(): void {
    // Limpiar el idle timeout cuando se destruye la app (por si acaso)
    this.auth.stopIdleTimeout();
  }

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
    this.auth.stopIdleTimeout();
    await this.auth.signOut();
    await this.router.navigateByUrl('/login');
  }
}
