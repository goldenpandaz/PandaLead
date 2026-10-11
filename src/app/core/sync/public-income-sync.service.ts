import { Injectable, effect, inject } from '@angular/core';

import { ProjectRepository } from '../../data/repositories/project.repository';
import { AuthService } from '../auth/auth.service';
import { SyncEngine } from './sync-engine.service';

/**
 * Publica el total de ingresos cobrados (suma de `deposit` de todos los projects
 * del tenant) en un nodo público y acotado — `tenants/{uid}/public/incomeCobrado` —
 * para que otra app propia (Kontrol Cash) lo pueda leer sin autenticarse contra
 * este proyecto de Firebase. Ver la excepción de lectura puntual en
 * `database.rules.json` (solo ese subárbol, el resto del tenant sigue privado).
 *
 * Se inyecta desde `App` (mismo motivo que `InstallPromptService`): el `effect()`
 * del constructor tiene que estar escuchando desde el arranque de la app, no solo
 * cuando el usuario visita el dashboard.
 */
@Injectable({ providedIn: 'root' })
export class PublicIncomeSyncService {
  private readonly auth = inject(AuthService);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly sync = inject(SyncEngine);

  constructor() {
    effect((onCleanup) => {
      const user = this.auth.currentUser();
      if (!user) return;

      const sub = this.projectRepo.watchAll().subscribe((projects) => {
        const total = projects.reduce((sum, p) => sum + (p.deposit ?? 0), 0);
        void this.sync.write('publicStats', 'income', `tenants/${user.uid}/public`, 'update', {
          incomeCobrado: total,
          incomeCobradoUpdatedAt: Date.now(),
        });
      });

      onCleanup(() => sub.unsubscribe());
    });
  }
}
