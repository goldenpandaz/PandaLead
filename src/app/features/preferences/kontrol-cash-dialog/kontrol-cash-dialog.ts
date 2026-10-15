import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { KontrolCashSyncService } from '../../../core/sync/kontrol-cash-sync.service';
import { generateLinkToken } from '../../../shared/utils/link-token.util';

/**
 * Conexión con Kontrol Cash. El token es estable: la primera vez que se abre se
 * genera y se guarda en el acto, y desde ahí solo cambia si se aprieta "Regenerar"
 * y se guarda. Cerrar el modal sin guardar deja el token guardado como estaba.
 */
@Component({
  selector: 'app-kontrol-cash-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatSnackBarModule, MatTooltipModule],
  templateUrl: './kontrol-cash-dialog.html',
  styleUrl: './kontrol-cash-dialog.scss',
})
export class KontrolCashDialog {
  private readonly sync = inject(KontrolCashSyncService);
  private readonly dialogRef = inject(MatDialogRef<KontrolCashDialog>);
  private readonly snackBar = inject(MatSnackBar);

  readonly saved = this.sync.token;
  readonly draft = signal(this.sync.token() ?? '');
  readonly saving = signal(false);
  /** Mientras se genera y guarda el primer token. */
  readonly initializing = signal(false);
  readonly errorMessage = signal<string | null>(null);

  /** Hay algo para guardar: se regeneró el token y todavía no se guardó. */
  readonly canSave = computed(() => !this.initializing() && !!this.draft() && this.draft() !== this.saved() && !this.saving());

  constructor() {
    if (!this.sync.token()) void this.createFirstToken();
  }

  regenerate(): void {
    if (this.initializing()) return;
    this.draft.set(generateLinkToken());
  }

  private async createFirstToken(): Promise<void> {
    const token = generateLinkToken();
    this.draft.set(token);
    this.initializing.set(true);
    try {
      await this.sync.connect(token);
    } catch {
      this.errorMessage.set('No se pudo activar la conexión. Cierra y vuelve a abrir para reintentar.');
    } finally {
      this.initializing.set(false);
    }
  }

  async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.draft());
      this.snackBar.open('Token copiado', undefined, { duration: 2000 });
    } catch {
      this.snackBar.open('No se pudo copiar. Selecciona el token y cópialo a mano.', undefined, { duration: 3000 });
    }
  }

  async save(): Promise<void> {
    if (!this.canSave()) return;
    await this.run(() => this.sync.connect(this.draft()));
  }

  async disconnect(): Promise<void> {
    await this.run(() => this.sync.disconnect());
  }

  private async run(action: () => Promise<void>): Promise<void> {
    this.saving.set(true);
    this.errorMessage.set(null);
    try {
      await action();
      this.dialogRef.close(true);
    } catch {
      this.errorMessage.set('No se pudo guardar. Revisa la conexión e intenta de nuevo.');
    } finally {
      this.saving.set(false);
    }
  }
}
