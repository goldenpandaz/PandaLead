import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export type InstallPlatform = 'ios' | 'android' | 'safari-mac' | 'other';

export interface InstallHelpData {
  platform: InstallPlatform;
}

/**
 * Pasos para instalar la app a mano cuando el navegador no ofrece el aviso
 * nativo (Safari en iPhone/iPad/Mac nunca lo ofrece; Chrome en Android a veces no).
 */
@Component({
  selector: 'app-install-help-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <h2 mat-dialog-title>Instalar PandaLead</h2>
    <mat-dialog-content>
      @switch (data.platform) {
        @case ('ios') {
          <p class="lead">En iPhone o iPad (Safari):</p>
          <ol>
            <li>Toca el botón <strong>Compartir</strong> <mat-icon inline>ios_share</mat-icon> de la barra de Safari.</li>
            <li>Desliza y elige <strong>Agregar a inicio</strong>.</li>
            <li>Toca <strong>Agregar</strong>. La app queda en tu pantalla de inicio.</li>
          </ol>
          <p class="note">Si estás en otro navegador, abre esta página en Safari.</p>
        }
        @case ('android') {
          <p class="lead">En Android (Chrome):</p>
          <ol>
            <li>Toca el menú <strong>⋮</strong> arriba a la derecha.</li>
            <li>Elige <strong>Instalar app</strong> o <strong>Agregar a la pantalla principal</strong>.</li>
            <li>Confirma con <strong>Instalar</strong>.</li>
          </ol>
        }
        @case ('safari-mac') {
          <p class="lead">En Safari (Mac):</p>
          <ol>
            <li>En el menú <strong>Archivo</strong> elige <strong>Agregar al Dock</strong>.</li>
            <li>Confirma con <strong>Agregar</strong>.</li>
          </ol>
        }
        @default {
          <p class="lead">En tu navegador:</p>
          <ol>
            <li>Busca el ícono de instalar en la barra de direcciones, o abre el menú del navegador.</li>
            <li>Elige <strong>Instalar PandaLead</strong>.</li>
          </ol>
        }
      }
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-flat-button color="primary" mat-dialog-close>Entendido</button>
    </mat-dialog-actions>
  `,
  styles: `
    .lead { margin: 0 0 0.5rem; font-weight: 500; }
    ol { margin: 0; padding-left: 1.25rem; line-height: 1.7; }
    .note { margin: 0.75rem 0 0; font-size: 0.85rem; opacity: 0.7; }
    mat-icon { vertical-align: middle; }
  `,
})
export class InstallHelpDialog {
  readonly data = inject<InstallHelpData>(MAT_DIALOG_DATA);
}
