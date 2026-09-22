import { Component, computed, effect, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { WhatsappTemplatePicker } from '../whatsapp/whatsapp-template-picker/whatsapp-template-picker';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { ConfirmDialog, ConfirmDialogData } from '../../../shared/dialogs/confirm-dialog/confirm-dialog';
import { MessageTemplate } from '../../../domain/models/template.model';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { ConfigRepository } from '../../../data/repositories/config.repository';
import { ProjectRepository } from '../../../data/repositories/project.repository';
import { Prospect } from '../../../domain/models/prospect.model';
import { Project } from '../../../domain/models/project.model';
import { StatusConfig } from '../../../domain/models/status.model';
import { ServiceConfig } from '../../../domain/models/service.model';

const SIMPLE_COLUMNS = ['select', 'favorite', 'name', 'phone', 'statusId', 'service', 'actions'] as const;

@Component({
  selector: 'app-archived-prospects-list',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    DatePipe,
  ],
  templateUrl: './archived-prospects-list.html',
  styleUrl: './archived-prospects-list.scss',
})
export class ArchivedProspectsList {
  private readonly prospectRepo = inject(ProspectRepository);
  private readonly configRepo = inject(ConfigRepository);
  private readonly projectRepo = inject(ProjectRepository);
  private readonly dialog = inject(MatDialog);
  private readonly whatsapp = inject(WhatsappService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  private readonly sort = viewChild.required(MatSort);
  private readonly paginator = viewChild.required(MatPaginator);

  readonly columns = SIMPLE_COLUMNS;

  private readonly prospects = toSignal(this.prospectRepo.watchAll(), { initialValue: [] as Prospect[] });
  readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] as StatusConfig[] });
  readonly services = toSignal(this.configRepo.watchServices(), { initialValue: [] as ServiceConfig[] });
  private readonly projects = toSignal(this.projectRepo.watchAll(), { initialValue: [] as Project[] });

  private readonly statusById = computed(() => new Map(this.statuses().map((s) => [s.id, s])));
  private readonly projectByProspectId = computed(() => new Map(this.projects().map((p) => [p.prospectId, p])));

  readonly search = signal('');

  readonly filtered = computed(() => {
    const term = this.search().trim().toLowerCase();

    return this.prospects().filter((p) => {
      if (!p.archived) return false;
      if (term) {
        const haystack = `${p.name} ${p.phone ?? ''}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }
      return true;
    });
  });

  readonly dataSource = new MatTableDataSource<Prospect>([]);
  readonly selection = new SelectionModel<Prospect>(true, []);

  constructor() {
    effect(() => {
      this.dataSource.data = this.filtered();
    });

    effect(() => {
      this.dataSource.sort = this.sort();
      this.dataSource.paginator = this.paginator();
    });
  }

  openDetail(prospect: Prospect, event?: Event): void {
    event?.stopPropagation();
    void this.router.navigate(['/prospects', prospect.id]);
  }

  statusOf(prospect: Prospect): StatusConfig | undefined {
    return this.statusById().get(prospect.statusId);
  }

  serviceIdOf(prospect: Prospect): string {
    return this.projectByProspectId().get(prospect.id)?.serviceId ?? '';
  }

  serviceNameOf(prospect: Prospect): string | undefined {
    return this.projectByProspectId().get(prospect.id)?.serviceName;
  }

  isPaidOf(prospect: Prospect): boolean {
    return !!this.projectByProspectId().get(prospect.id)?.paid;
  }

  toggleFavorite(prospect: Prospect, event: Event): void {
    event.stopPropagation();
    void this.prospectRepo.setFavorite(prospect.id, !prospect.favorite);
  }

  toggleAllSelection(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.data);
    }
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length && this.dataSource.data.length > 0;
  }

  openWhatsapp(prospect: Prospect, event: Event): void {
    event.stopPropagation();
    if (!prospect.phone) return;

    this.dialog
      .open<WhatsappTemplatePicker, void, MessageTemplate | null>(WhatsappTemplatePicker, { width: '420px' })
      .afterClosed()
      .subscribe((template) => {
        if (template === undefined) return;
        void this.whatsapp.openWithTemplate(prospect, template, this.projectByProspectId().get(prospect.id) ?? null);
      });
  }

  private confirmDialog(data: ConfirmDialogData): Promise<boolean> {
    return firstValueFrom(this.dialog.open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, { data, width: '380px' }).afterClosed()).then(
      (result) => !!result,
    );
  }

  async unarchiveOne(prospect: Prospect, event: Event): Promise<void> {
    event.stopPropagation();
    await this.prospectRepo.update(prospect.id, { archived: false });
    this.snackBar.open(`"${prospect.name}" recuperado.`, 'Cerrar', { duration: 2000 });
  }

  async unarchiveSelectedBatch(): Promise<void> {
    const count = this.selection.selected.length;
    if (count === 0) return;

    const confirmed = await this.confirmDialog({
      title: `¿Recuperar ${count} cliente${count !== 1 ? 's' : ''}?`,
      message: `Se recupera${count !== 1 ? 'n' : ''} ${count} cliente${count !== 1 ? 's' : ''} a la lista principal.`,
      confirmLabel: 'Recuperar',
      icon: 'unarchive',
    });
    if (!confirmed) return;

    const prospectIds = this.selection.selected.map((p) => p.id);
    await Promise.all(prospectIds.map((id) => this.prospectRepo.update(id, { archived: false })));

    this.selection.clear();
    this.snackBar.open(`${count} cliente${count !== 1 ? 's' : ''} recuperado${count !== 1 ? 's' : ''} correctamente.`, 'Cerrar', { duration: 3000 });
  }

  async remove(prospect: Prospect, event: Event): Promise<void> {
    event.stopPropagation();
    const confirmed = await this.confirmDialog({
      title: '¿Eliminar cliente?',
      message: `"${prospect.name}" se borra para siempre — esta acción no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      icon: 'delete',
      danger: true,
    });
    if (!confirmed) return;
    await this.prospectRepo.delete(prospect.id);
  }

  async deleteSelectedBatch(): Promise<void> {
    const count = this.selection.selected.length;
    if (count === 0) return;

    const confirmed = await this.confirmDialog({
      title: `¿Eliminar ${count} cliente${count !== 1 ? 's' : ''}?`,
      message: `Se borra${count !== 1 ? 'n' : ''} ${count} cliente${count !== 1 ? 's' : ''} para siempre — esta acción no se puede deshacer.`,
      confirmLabel: 'Eliminar',
      icon: 'delete',
      danger: true,
    });
    if (!confirmed) return;

    const prospectIds = this.selection.selected.map((p) => p.id);
    await Promise.all(prospectIds.map((id) => this.prospectRepo.delete(id)));

    this.selection.clear();
    this.snackBar.open(`${count} cliente${count !== 1 ? 's' : ''} eliminado${count !== 1 ? 's' : ''} correctamente.`, 'Cerrar', { duration: 3000 });
  }
}
