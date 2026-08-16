import { Injectable, Signal, inject, signal } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { Database, ref, set } from 'firebase/database';
import { Subject, Subscription, filter, fromEvent, merge, timer } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

import { FIREBASE_AUTH, FIREBASE_DATABASE } from '../firebase/firebase.tokens';

/**
 * Único punto de contacto con Firebase Auth. Expone el usuario actual como Signal
 * (se actualiza con `onAuthStateChanged`, no hace falta suscribirse manualmente).
 * Soporta email/password y Google — herramienta personal, no hace falta forzar
 * un solo método de login.
 *
 * Soporta auto-logout por inactividad: llamar startIdleTimeout(minutes) para iniciar
 * el monitor de inactividad. El timer se resetea automáticamente con cualquier interacción.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth: Auth = inject(FIREBASE_AUTH);
  private readonly db: Database = inject(FIREBASE_DATABASE);

  private readonly currentUserSignal = signal<User | null>(null);
  private readonly authReadySignal = signal(false);

  readonly currentUser: Signal<User | null> = this.currentUserSignal.asReadonly();
  readonly authReady: Signal<boolean> = this.authReadySignal.asReadonly();

  private idleTimerSubscription: Subscription | null = null;
  private readonly destroy$ = new Subject<void>();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSignal.set(user);
      this.authReadySignal.set(true);
    });
  }

  isAuthenticated(): boolean {
    return this.currentUserSignal() !== null;
  }

  async signInWithEmail(email: string, password: string): Promise<void> {
    performance.mark('firebase-signin-email-start');
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } finally {
      performance.mark('firebase-signin-email-end');
      performance.measure('firebase-signin-email', 'firebase-signin-email-start', 'firebase-signin-email-end');
      this.logPerformanceMetrics('firebase-signin-email');
    }
  }

  async registerWithEmail(email: string, password: string, name?: string): Promise<void> {
    performance.mark('firebase-register-email-start');
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, password);
      const uid = credential.user.uid;

      // Actualizar displayName en Firebase Auth
      if (name) {
        await updateProfile(credential.user, { displayName: name });
      }

      // Crear perfil de usuario en RTDB bajo tenants/{uid}/profile
      const profileRef = ref(this.db, `tenants/${uid}/profile`);
      await set(profileRef, {
        email,
        name: name || email.split('@')[0], // Usar el dominio del email como fallback
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      });
    } finally {
      performance.mark('firebase-register-email-end');
      performance.measure('firebase-register-email', 'firebase-register-email-start', 'firebase-register-email-end');
      this.logPerformanceMetrics('firebase-register-email');
    }
  }

  async signInWithGoogle(): Promise<void> {
    performance.mark('firebase-signin-google-start');
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
    } finally {
      performance.mark('firebase-signin-google-end');
      performance.measure('firebase-signin-google', 'firebase-signin-google-start', 'firebase-signin-google-end');
      this.logPerformanceMetrics('firebase-signin-google');
    }
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }

  /**
   * Inicia el monitor de inactividad. El usuario será desconectado automáticamente
   * tras N minutos de inactividad. Cualquier interacción (click, keydown, touchstart, mousemove)
   * resetea el timer.
   *
   * @param minutes Minutos de inactividad antes de logout (default: 30)
   */
  startIdleTimeout(minutes: number = 30): void {
    // Cancelar timeout anterior si existe
    this.stopIdleTimeout();

    const idleMillis = minutes * 60 * 1000;

    // Listener de interacciones del usuario: click, keyboard, touch, mouse
    const userInteraction$ = merge(
      fromEvent(document, 'click'),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'touchstart'),
      fromEvent(document, 'mousemove')
    ).pipe(
      // Solo resetea el timer si el usuario está autenticado
      filter(() => this.isAuthenticated()),
      // Debounce para no resetear a cada keystroke/mousemove
      debounceTime(1000),
      // A cada interacción, inicia un timer. Si hay otra interacción antes de que
      // expire, switchMap cancela el timer anterior y comienza uno nuevo.
      switchMap(() => timer(idleMillis)),
      // Limpieza automática cuando se destruye el servicio
      takeUntil(this.destroy$)
    );

    // Inicia el primer timer (sin esperar a la primera interacción)
    this.idleTimerSubscription = merge(
      timer(idleMillis),
      userInteraction$
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isAuthenticated()) {
          this.performIdleLogout();
        }
      });
  }

  /**
   * Detiene el monitor de inactividad.
   */
  stopIdleTimeout(): void {
    if (this.idleTimerSubscription) {
      this.idleTimerSubscription.unsubscribe();
      this.idleTimerSubscription = null;
    }
  }

  /**
   * Realiza logout silenciosamente sin que el usuario lo haya solicitado.
   * Se llama automáticamente cuando expira el timeout de inactividad.
   */
  private async performIdleLogout(): Promise<void> {
    console.warn('Usuario inactivo por 30 minutos. Cerrando sesión...');
    try {
      await signOut(this.auth);
      // Limpiar localStorage completamente
      localStorage.clear();
      sessionStorage.clear();
      // Redirigir a login la hace el guard o el interceptor, acá solo limpiamos
    } catch (error) {
      console.error('Error durante idle logout:', error);
    }
  }

  /**
   * Log de métricas de performance a Firebase (si está disponible).
   */
  private logPerformanceMetrics(eventName: string): void {
    try {
      const measure = performance.getEntriesByName(eventName)[0];
      if (measure && this.db) {
        const now = new Date().toISOString();
        set(ref(this.db, `performance-metrics/${now}/${eventName}`), {
          duration: measure.duration,
          timestamp: now,
        }).catch((err) => console.error('Error logging performance:', err));
      }
    } catch (error) {
      console.error('Error en logPerformanceMetrics:', error);
    }
  }

  /**
   * Cleanup cuando se destruye el servicio.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopIdleTimeout();
  }
}
