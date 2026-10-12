import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, of, switchMap } from 'rxjs';

import { KontrolCashRepository } from '../../data/repositories/kontrol-cash.repository';
import { KontrolCashConnection } from '../../domain/models/kontrol-cash-connection.model';
import { ProjectRepository } from '../../data/repositories/project.repository';
import { ProspectRepository } from '../../data/repositories/prospect.repository';
import { incomeByMonth, projectsOfExistingProspects } from '../../shared/utils/project-finance.util';
import { AuthService } from '../auth/auth.service';
import { UserProfileService } from '../profile/user-profile.service';

/**
 * Mantiene publicado, bajo el token de la conexión, lo cobrado en cada mes
 * (`kontrolLinks/{token}/incomeByMonth/{yyyy-mm}`) para que Kontrol Cash lo lea.
 * Sin token (sin conexión) no publica nada: el resto de los datos sigue privado.
 *
 * Se inyecta desde `App` (mismo motivo que `InstallPromptService`): los `effect()`
 * del constructor tienen que estar escuchando desde el arranque de la app, no solo
 * cuando el usuario visita Configuración.
 */
@Injectable({ providedIn: 'root' })
export class KontrolCashSyncService {
  private readonly auth = inject(AuthService);
  private readonly profile = inject(UserProfileService);
  private readonly repo = inject(KontrolCashRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly prospectRepo = inject(ProspectRepository);

  private readonly connection = toSignal(
    toObservable(this.auth.currentUser).pipe(switchMap((user) => (user ? this.repo.watchConnection() : of(null)))),
    { initialValue: null as KontrolCashConnection | null },
  );

  /** Token guardado (null si no hay conexión). */
  readonly token = computed(() => this.connection()?.token ?? null);

  /** Interruptor: apagado, no se publica nada nuevo. Sin el campo guardado cuenta como encendido. */
  readonly enabled = computed(() => this.connection()?.enabled !== false);

  private readonly linkState = toSignal(
    toObservable(this.token).pipe(switchMap((token) => (token ? this.repo.watchLink(token) : of(null)))),
    { initialValue: null },
  );

  /** El usuario apagó la sincronización desde el lado de Kontrol Cash (`kontrolEnabled: false`). */
  readonly remoteOff = computed(() => this.linkState()?.kontrolEnabled === false);

  /** Kontrol Cash ya usa el token y no lo apagó: avisó con `kontrolConnectedAt` al guardarlo, o con `kontrolLastSyncAt` al sincronizar. */
  readonly connected = computed(
    () => !this.remoteOff() && !!(this.linkState()?.kontrolConnectedAt || this.linkState()?.kontrolLastSyncAt),
  );

  /** Última vez que Kontrol Cash sincronizó (epoch ms), o null. */
  readonly lastSyncAt = computed(() => this.linkState()?.kontrolLastSyncAt ?? null);

  /** Ingresos por mes ya calculados; null hasta que cargan los datos (así no se publica un vacío falso). */
  private readonly income = signal<Record<string, number> | null>(null);

  constructor() {
    effect((onCleanup) => {
      const user = this.auth.currentUser();
      if (!user) {
        this.income.set(null);
        return;
      }
      const sub = combineLatest([this.projectRepo.watchAll(), this.prospectRepo.watchAll()]).subscribe(([projects, prospects]) =>
        this.income.set(incomeByMonth(projectsOfExistingProspects(projects, prospects))),
      );
      onCleanup(() => sub.unsubscribe());
    });

    effect(() => {
      const token = this.token();
      if (!token) return;
      if (!this.enabled()) {
        // Apagada: solo se avisa `paused`. No se lee `income`, así los cambios de datos no re-disparan esto.
        void this.repo.pause(token);
        return;
      }
      const income = this.income();
      const displayName = this.profile.displayName();
      if (income) void this.repo.publish(token, { incomeByMonth: income, displayName: displayName || undefined });
    });
  }

  /** Enciende o apaga la conexión sin tocar el token. Al encender se republica solo (el effect). */
  setEnabled(enabled: boolean): Promise<void> {
    return this.repo.setEnabled(enabled);
  }

  /** Activa (o cambia) el token: publica primero con el nuevo y recién después baja el viejo. */
  async connect(token: string): Promise<void> {
    const previous = this.token();
    await this.repo.publish(token, { incomeByMonth: this.income() ?? {}, displayName: this.profile.displayName() || undefined });
    await this.repo.saveToken(token);
    if (previous && previous !== token) await this.repo.unpublish(previous);
  }

  async disconnect(): Promise<void> {
    const token = this.token();
    if (!token) return;
    await this.repo.clearToken();
    await this.repo.unpublish(token);
  }
}
