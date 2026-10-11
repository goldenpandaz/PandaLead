import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firstValueFrom } from 'rxjs';

import { DIAL_CODES } from '../../../shared/constants/dial-codes';
import { ProspectEditDialog } from './prospect-edit-dialog';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { ConfigRepository } from '../../../data/repositories/config.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { HistoryRepository } from '../../../data/repositories/history.repository';
import { HistoryEventType } from '../../../domain/enums/history-event-type.enum';
import { Prospect } from '../../../domain/models/prospect.model';
import { Project } from '../../../domain/models/project.model';

/** Edición de un cliente (diálogo + guardado + servicio) compartida entre la
 * lista principal y la de archivados. */
@Injectable({ providedIn: 'root' })
export class ProspectEditService {
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly prospectRepo = inject(ProspectRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly historyRepo = inject(HistoryRepository);

  edit(prospect: Prospect): void {
    void this.openEdit(prospect);
  }

  private async openEdit(prospect: Prospect): Promise<void> {
    const [categories, statuses, services, projects] = await Promise.all([
      firstValueFrom(this.configRepo.watchCategories()),
      firstValueFrom(this.configRepo.watchStatuses()),
      firstValueFrom(this.configRepo.watchServices()),
      firstValueFrom(this.projectRepo.watchAll()),
    ]);
    const serviceId = projects.find((p) => p.prospectId === prospect.id)?.serviceId ?? '';

    this.dialog
      .open(ProspectEditDialog, {
        width: '90vw',
        maxWidth: '440px',
        data: { prospect, categories, statuses, services, serviceId, dialCodes: DIAL_CODES },
      })
      .afterClosed()
      .subscribe(async (result) => {
        if (!result) return;
        const { serviceId: newServiceId, ...changes } = result;
        try {
          await this.prospectRepo.update(prospect.id, changes);
          await this.assignService(prospect, newServiceId);
        } catch (err) {
          this.snackBar.open('Error al guardar cambios', 'Cerrar', { duration: 3000 });
          console.error(err);
        }
      });
  }

  /** Crea el Proyecto si todavía no existe (recién ahí tiene sentido guardar un
   * servicio) y le asigna el servicio elegido, con nombre + precio copiados de
   * ese momento. */
  async assignService(prospect: Prospect, serviceId: string): Promise<void> {
    const [projects, statuses, services] = await Promise.all([
      firstValueFrom(this.projectRepo.watchAll()),
      firstValueFrom(this.configRepo.watchStatuses()),
      firstValueFrom(this.configRepo.watchServices()),
    ]);
    const project = projects.find((p) => p.prospectId === prospect.id);
    if (serviceId === (project?.serviceId ?? '')) return;
    if (project?.paid) return; // bloqueado hasta destildar "Pagado"

    let projectId = project?.id;
    if (!projectId) {
      projectId = await this.projectRepo.create({
        prospectId: prospect.id,
        startDate: new Date().toISOString().slice(0, 10),
        status: 'Activo',
      });
      await this.historyRepo.log(prospect.id, HistoryEventType.ProjectCreated, { projectId });
    }

    if (!serviceId) {
      await this.projectRepo.clearService(projectId);
      return;
    }

    const service = services.find((s) => s.id === serviceId);
    if (!service) return;

    const updates: Partial<Project> = { serviceId: service.id, serviceName: service.name, servicePrice: service.price };
    // Si ya está en un estado Final y todavía no se cargó ningún anticipo, se
    // asume que el precio del servicio ya se cobró completo.
    const status = statuses.find((s) => s.id === prospect.statusId);
    if (status?.isFinal && !project?.deposit && service.price) {
      updates.deposit = service.price;
    }

    await this.projectRepo.update(projectId, updates);
    await this.historyRepo.log(prospect.id, HistoryEventType.ServiceAssigned, { serviceId: service.id, serviceName: service.name });
  }
}
