import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Project, WORK_STATUSES } from '../../domain/models/project.model';
import { projectTotal } from '../../shared/utils/project-finance.util';
import { BaseRepository } from './base.repository';

const COLLECTION = 'projects';

/** Doc tal cual está guardado: los viejos traen `deposit`/`balance`/`paid` y pueden no traer `payments`/`notes`. */
type LegacyProject = Omit<Project, 'payments' | 'notes'> & {
  payments?: Project['payments'];
  notes?: Project['notes'];
  deposit?: number;
  balance?: number;
  paid?: boolean;
};

/** Único punto de compatibilidad con docs anteriores a los abonos múltiples. */
function normalizeProject(raw: LegacyProject): Project {
  const { deposit, balance: _balance, paid, payments, notes, ...rest } = raw;
  void _balance;
  const status = (WORK_STATUSES as readonly string[]).includes(rest.status) ? rest.status : 'En proceso';
  const base = { ...rest, status, notes: Array.isArray(notes) ? notes : [] };

  if (Array.isArray(payments)) return { ...base, payments };

  const total = projectTotal({ ...rest, payments: [] });
  const dep = deposit ?? 0;
  const amount = paid ? Math.max(dep, total) : Math.max(dep, 0);

  if (amount > 0) {
    return { ...base, payments: [{ id: 'legacy', amount, date: rest.startDate, note: 'Anticipo anterior' }] };
  }
  return { ...base, payments: [] };
}

/** Vive en `/tenants/{uid}/projects/{id}` (.docs/architecture.md §6). */
@Injectable({ providedIn: 'root' })
export class ProjectRepository extends BaseRepository {
  watchAll(): Observable<Project[]> {
    return this.sync
      .watchCollection<LegacyProject>(COLLECTION, this.tenantPath(COLLECTION))
      .pipe(map((list) => list.map(normalizeProject)));
  }

  watchByProspect(prospectId: string): Observable<Project[]> {
    // RTDB no permite filtrar por dos campos a la vez sin un índice dedicado —
    // a esta escala, filtrar en cliente sobre `watchAll()` es más simple y
    // suficiente (mismo criterio que DuplicateDetectionService, ver su comentario).
    return this.watchAll().pipe(map((projects) => projects.filter((p) => p.prospectId === prospectId)));
  }

  async create(data: Omit<Project, 'id' | 'payments' | 'notes'> & Partial<Pick<Project, 'payments' | 'notes'>>): Promise<string> {
    const id = this.generateId();
    const project: Project = { ...data, payments: data.payments ?? [], notes: data.notes ?? [], id };
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'set', project);
    return id;
  }

  /** `null` en cualquier campo opcional lo borra de verdad en RTDB — a diferencia
   * de `undefined`, que `SyncEngine` saca del payload antes de mandarlo
   * (stripUndefined), así que un `update({ campo: undefined })` le llega vacío
   * al servidor y no borra nada. Para borrar un campo, mandá `null` explícito.
   * `payments`/`notes` se mandan completos: RTDB reemplaza el array entero. */
  async update(id: string, changes: Partial<{ [K in keyof Omit<Project, 'id' | 'prospectId'>]: Project[K] | null }>): Promise<void> {
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'update', changes);
  }

  async delete(id: string): Promise<void> {
    await this.sync.write(COLLECTION, id, this.tenantPath(COLLECTION, id), 'remove');
  }

  /** Atajo para sacar el servicio asignado — ver el comentario de `update()`. */
  async clearService(id: string): Promise<void> {
    await this.update(id, { serviceId: null, serviceName: null, servicePrice: null });
  }
}
