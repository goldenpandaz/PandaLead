import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Ícono a mostrar arriba del mensaje (Material icon ligature). Default: "help". */
  icon?: string;
  /** Colorea el botón de confirmar en rojo — para acciones destructivas (borrar). */
  danger?: boolean;
  /** Solo un botón (para avisos tipo alert(), no confirmaciones sí/no). */
  hideCancel?: boolean;
}

/** Reemplaza `confirm()`/`alert()` nativos del navegador (feos, sin estilo) por
 * un diálogo con la estética de la app. `afterClosed()` resuelve `true`/`false`. */
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss',
})
export class ConfirmDialog {
  private readonly dialogRef = inject(MatDialogRef<ConfirmDialog, boolean>);
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
