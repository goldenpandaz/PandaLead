import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

import { DIAL_CODES } from '../../../shared/constants/dial-codes';
import { ProspectEditDialog } from './prospect-edit-dialog';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { ConfigRepository } from '../../../data/repositories/config.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { Prospect } from '../../../domain/models/prospect.model';

/** Edición de un cliente (diálogo + guardado) compartida entre la lista
 * principal y la de archivados. Los trabajos/servicios se gestionan desde la ficha. */
@Injectable({ providedIn: 'root' })
export class ProspectEditService {
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly prospectRepo = inject(ProspectRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly projectRepo = inject(ProjectRepository);

  edit(prospect: Prospect): void {
    void this.openEdit(prospect);
  }

  private async openEdit(prospect: Prospect): Promise<void> {
    const [categories, statuses] = await Promise.all([
      firstValueFrom(this.configRepo.watchCategories()),
      firstValueFrom(this.configRepo.watchStatuses()),
    ]);

    this.dialog
      .open(ProspectEditDialog, {
        width: '90vw',
        maxWidth: '440px',
        data: { prospect, categories, statuses, dialCodes: DIAL_CODES },
      })
      .afterClosed()
      .subscribe(async (result) => {
        if (!result) return;
        try {
          if (result.statusId !== prospect.statusId) {
            const newStatus = statuses.find((s) => s.id === result.statusId);
            if (newStatus?.requiresService) {
              const projects = await firstValueFrom(this.projectRepo.watchByProspect(prospect.id));
              if (projects.length === 0) {
                this.snackBar.open('Agregá un trabajo primero (Ver → Trabajos).', 'Cerrar', { duration: 4000 });
                result.statusId = prospect.statusId;
              }
            }
          }
          await this.prospectRepo.update(prospect.id, result);
        } catch (err) {
          this.snackBar.open('Error al guardar cambios', 'Cerrar', { duration: 3000 });
          console.error(err);
        }
      });
  }
}
