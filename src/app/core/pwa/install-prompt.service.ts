import { Injectable, signal } from '@angular/core';

/** Evento no estandarizado en TS — Chrome/Edge/Android lo disparan, Safari
 * (iOS/macOS) y Firefox nunca. */
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

/**
 * Captura el evento `beforeinstallprompt` del navegador para poder mostrar un
 * botón propio de "Instalar app" en vez de depender del ícono chiquito que
 * Chrome pone (a veces) en la barra de direcciones — fácil de no ver, y en
 * iOS/Safari no existe ningún prompt automático (Apple no lo permite).
 *
 * `providedIn: 'root'` + inyectado en `App` (componente raíz) para que el
 * listener quede enganchado lo antes posible — si el evento dispara antes de
 * que algo lo escuche, se pierde para siempre en esa carga de página.
 */
@Injectable({ providedIn: 'root' })
export class InstallPromptService {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;

  /** true si el navegador soporta instalar (Chrome/Edge/Android) y todavía no se instaló. */
  readonly canInstall = signal(false);
  /** true si ya corre como app instalada (standalone) — no tiene sentido ofrecer instalar de nuevo. */
  readonly isInstalled = signal(this.checkStandalone());
  readonly isIos = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;

  constructor() {
    if (this.isInstalled()) return;

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event as BeforeInstallPromptEvent;
      this.canInstall.set(true);
    });

    window.addEventListener('appinstalled', () => {
      this.isInstalled.set(true);
      this.canInstall.set(false);
      this.deferredPrompt = null;
    });
  }

  private checkStandalone(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  /** Dispara el prompt nativo del navegador (Chrome/Edge/Android). En iOS no
   * hace nada — ahí no existe este mecanismo, hay que guiar a mano (Compartir
   * → Agregar a inicio), ver `isIos` en el componente que llama a esto. */
  async promptInstall(): Promise<void> {
    if (!this.deferredPrompt) return;
    await this.deferredPrompt.prompt();
    await this.deferredPrompt.userChoice;
    this.deferredPrompt = null;
    this.canInstall.set(false);
  }
}
