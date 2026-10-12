import { Injectable, computed, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';

import { ProfileRepository } from '../../data/repositories/profile.repository';
import { UserProfile } from '../../domain/models/user-profile.model';
import { AuthService } from '../auth/auth.service';

/**
 * Nombre y foto del usuario, listos para mostrar (sidebar, Configuración).
 * Si todavía no cargó un nombre propio, cae al de la cuenta y por último al email.
 */
@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private readonly auth = inject(AuthService);
  private readonly repo = inject(ProfileRepository);

  private readonly profile = toSignal(
    toObservable(this.auth.currentUser).pipe(switchMap((user) => (user ? this.repo.watch() : of(null)))),
    { initialValue: null as UserProfile | null },
  );

  readonly displayName = computed(() => {
    const own = this.profile()?.displayName?.trim();
    if (own) return own;
    const user = this.auth.currentUser();
    return user?.displayName?.trim() || user?.email?.split('@')[0] || '';
  });

  readonly photo = computed(() => this.profile()?.photo || null);

  readonly initials = computed(() => {
    const words = this.displayName().split(/\s+/).filter(Boolean);
    return (words.length > 1 ? words[0][0] + words[1][0] : (words[0] ?? '?').slice(0, 2)).toUpperCase();
  });

  saveName(name: string): Promise<void> {
    return this.repo.save({ displayName: name.trim() });
  }

  savePhoto(dataUrl: string): Promise<void> {
    return this.repo.save({ photo: dataUrl });
  }

  /** Vacío en vez de null/borrar: así la escritura y el cache local se manejan igual que cualquier otro campo. */
  removePhoto(): Promise<void> {
    return this.repo.save({ photo: '' });
  }
}
