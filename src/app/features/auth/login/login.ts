import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly mode = signal<'login' | 'register'>('login');

  // TODO: sacar el prefill antes de usar la app con datos reales de clientes —
  // es solo comodidad mientras seguimos desarrollando, no debería quedar en
  // ninguna versión que uses en serio.
  readonly form = this.fb.nonNullable.group({
    email: ['develop@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  async submitEmail(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, password } = this.form.getRawValue();
    const action =
      this.mode() === 'login'
        ? () => this.auth.signInWithEmail(email, password)
        : () => this.auth.registerWithEmail(email, password);
    await this.attempt(action);
  }

  toggleMode(): void {
    this.mode.set(this.mode() === 'login' ? 'register' : 'login');
    this.errorMessage.set(null);
  }

  async submitGoogle(): Promise<void> {
    await this.attempt(() => this.auth.signInWithGoogle());
  }

  private async attempt(action: () => Promise<void>): Promise<void> {
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      await action();
      await this.router.navigateByUrl('/prospects');
    } catch (error) {
      this.errorMessage.set(this.describeError(error));
    } finally {
      this.loading.set(false);
    }
  }

  /** Firebase Auth tira códigos específicos (`error.code`) — mostrarlos en vez de
   * un mensaje genérico ahorra minutos de "¿por qué no anda?" al debuggear. */
  private describeError(error: unknown): string {
    const code = (error as { code?: string })?.code ?? '';
    switch (code) {
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Ese email/contraseña no existe. Si es la primera vez, creá el usuario desde Firebase Console → Authentication → Users.';
      case 'auth/operation-not-allowed':
        return 'El proveedor de email/contraseña no está habilitado en Firebase Console → Authentication → Sign-in method.';
      case 'auth/invalid-email':
        return 'Ese email no es válido.';
      case 'auth/email-already-in-use':
        return 'Ya existe una cuenta con ese email — probá "Iniciar sesión" en vez de "Crear cuenta".';
      case 'auth/weak-password':
        return 'La contraseña es muy débil — probá con una más larga.';
      case 'auth/too-many-requests':
        return 'Demasiados intentos fallidos — esperá un momento y probá de nuevo.';
      case 'auth/popup-closed-by-user':
        return 'Cerraste la ventana de Google antes de terminar.';
      case 'auth/network-request-failed':
        return 'Sin conexión a internet — el login necesita estar online.';
      default:
        return code ? `No se pudo iniciar sesión (${code}).` : 'No se pudo iniciar sesión. Intentá de nuevo.';
    }
  }
}
