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
} from 'firebase/auth';

import { FIREBASE_AUTH } from '../firebase/firebase.tokens';

/**
 * Único punto de contacto con Firebase Auth. Expone el usuario actual como Signal
 * (se actualiza con `onAuthStateChanged`, no hace falta suscribirse manualmente).
 * Soporta email/password y Google — herramienta personal, no hace falta forzar
 * un solo método de login.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth: Auth = inject(FIREBASE_AUTH);

  private readonly currentUserSignal = signal<User | null>(null);
  private readonly authReadySignal = signal(false);

  readonly currentUser: Signal<User | null> = this.currentUserSignal.asReadonly();
  readonly authReady: Signal<boolean> = this.authReadySignal.asReadonly();

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
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  async registerWithEmail(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithGoogle(): Promise<void> {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  async signOut(): Promise<void> {
    await signOut(this.auth);
  }
}
