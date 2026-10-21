import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ACCENT_THEMES, UiStateService } from '../../core/ui-state.service';
import { CHANGELOG, ChangelogEntry } from '../../core/changelog';
import { InstallPromptService } from '../../core/pwa/install-prompt.service';
import { UserProfileService } from '../../core/profile/user-profile.service';
import { KontrolCashSyncService } from '../../core/sync/kontrol-cash-sync.service';
import { APP_VERSION } from '../../core/version';
import { resizeImageToDataUrl } from '../../shared/utils/image-resize.util';
import { KontrolCashDialog } from './kontrol-cash-dialog/kontrol-cash-dialog';

const NAME_MAX_LENGTH = 60;
const KONTROL_CASH_SIGNUP_URL = 'https://juanzarta.github.io/Kontrol-Cash/login';
/** Link del video tutorial en YouTube. Mientras esté vacío, el botón queda deshabilitado ("Próximamente"). */
const TUTORIAL_VIDEO_URL = 'https://youtu.be/XU6mmZbG4uI';

@Component({
  selector: 'app-preferences',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './preferences.html',
  styleUrl: './preferences.scss',
})
export class Preferences {
  uiState = inject(UiStateService);
  profile = inject(UserProfileService);
  kontrolCash = inject(KontrolCashSyncService);
  private readonly dialog = inject(MatDialog);
  installPrompt = inject(InstallPromptService);
  themes = ACCENT_THEMES;
  changelog = CHANGELOG;
  version = APP_VERSION;
  readonly nameMaxLength = NAME_MAX_LENGTH;
  readonly kontrolCashUrl = KONTROL_CASH_SIGNUP_URL;
  readonly tutorialUrl = TUTORIAL_VIDEO_URL;

  notaAbierta = signal<ChangelogEntry | null>(null);

  /** Lo que se está tipeando; `null` mientras no se tocó el campo (muestra el nombre guardado). */
  private readonly nameDraft = signal<string | null>(null);
  readonly nameValue = computed(() => this.nameDraft() ?? this.profile.displayName());
  readonly nameChanged = computed(() => {
    const draft = this.nameDraft()?.trim();
    return draft !== undefined && draft.length > 0 && draft !== this.profile.displayName();
  });
  readonly savingProfile = signal(false);
  readonly photoError = signal<string | null>(null);

  @HostListener('document:keydown.escape')
  cerrarNota(): void {
    this.notaAbierta.set(null);
  }

  openKontrolCash(): void {
    this.dialog.open(KontrolCashDialog, { width: '90vw', maxWidth: '440px', autoFocus: false });
  }

  onNameInput(event: Event): void {
    this.nameDraft.set((event.target as HTMLInputElement).value);
  }

  async saveName(): Promise<void> {
    if (!this.nameChanged() || this.savingProfile()) return;
    this.savingProfile.set(true);
    try {
      await this.profile.saveName(this.nameDraft()!);
      this.nameDraft.set(null);
    } finally {
      this.savingProfile.set(false);
    }
  }

  async onPhotoSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = ''; // permite volver a elegir el mismo archivo
    if (!file) return;

    this.photoError.set(null);
    this.savingProfile.set(true);
    try {
      await this.profile.savePhoto(await resizeImageToDataUrl(file));
    } catch {
      this.photoError.set('No se pudo usar esa imagen. Prueba con una foto JPG o PNG.');
    } finally {
      this.savingProfile.set(false);
    }
  }

  async removePhoto(): Promise<void> {
    this.photoError.set(null);
    await this.profile.removePhoto();
  }
}
