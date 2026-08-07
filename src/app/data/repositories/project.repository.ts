import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../../domain/models/project.model';
import { BaseRepository } from './base.repository';

const COLLECTION = 'projects';

/** Vive en `/tenants/{uid}/projects/{id}` (.docs/architecture.md §6). */
@Injectable({ providedIn: 'root' })
export class ProjectRepository extends BaseRepository {
  watchAll(): Observable<Project[]> {
    return this.sync.watchCollection<Project>(COLLECTION, this.tenantPath(COLLECTION));
  }

  watchByProspect(prospectId: string): Observable<Project[]> {
    // RTDB no permite filtrar por dos campos a la vez sin un índice dedicado —
    // a esta escala, filtrar en cliente sobre `watchAll()` es más simple y
    // suficiente (mismo criterio que DuplicateDetectionService, ver su comentario).
    return new Observable<Project[]>((subscriber) => {
      const sub = this.watchAll().subscribe({
        next: (projects) => subscriber.next(projects.filter((p) => p.prospectId === prospectId)),
        error: (err) => subscriber.error(err),
      });
      return () => sub.unsubscribe();
    });
  }

  async create(data: Omit<Project, 'id'>): Promise<string> {
    const id = this.generateId();
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'set', { ...data, id });
    return id;
  }

  /** `null` en cualquier campo opcional lo borra de verdad en RTDB — a diferencia
   * de `undefined`, que `SyncEngine` saca del payload antes de mandarlo
   * (stripUndefined), así que un `update({ campo: undefined })` le llega vacío
   * al servidor y no borra nada. Para borrar un campo, mandá `null` explícito. */
  async update(id: string, changes: Partial<{ [K in keyof Omit<Project, 'id' | 'prospectId'>]: Project[K] | null }>): Promise<void> {
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'update', changes);
  }

  /** Atajo para sacar el servicio asignado — ver el comentario de `update()`. */
  async clearService(id: string): Promise<void> {
    await this.update(id, { serviceId: null, serviceName: null, servicePrice: null });
  }
}
