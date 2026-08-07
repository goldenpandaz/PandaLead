import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { StatusConfig } from '../../domain/models/status.model';
import { MessageTemplate } from '../../domain/models/template.model';
import { ServiceConfig } from '../../domain/models/service.model';
import { CategoryConfig } from '../../domain/models/category.model';
import { BaseRepository } from './base.repository';

const STATUSES = 'statuses';
const TEMPLATES = 'templates';
const SERVICES = 'services';
const CATEGORIES = 'categories';

/** Plantillas de arranque — administrables después desde `settings`. */
const DEFAULT_TEMPLATES: readonly Omit<MessageTemplate, 'id'>[] = [
  {
    name: 'Primer contacto',
    category: 'Primer contacto',
    body: 'Hola {{nombre}}! Te escribo de [tu negocio] — vi tu negocio y quería contarte cómo puedo ayudarte.',
    variables: ['nombre'],
  },
  {
    name: 'Seguimiento',
    category: 'Seguimiento',
    body: 'Hola {{nombre}}, ¿pudiste ver mi mensaje anterior? Quedo atento/a.',
    variables: ['nombre'],
  },
  {
    name: 'Oferta',
    category: 'Oferta',
    body: 'Hola {{nombre}}! Tengo una propuesta para vos, ¿tenés unos minutos para charlarlo?',
    variables: ['nombre'],
  },
  {
    name: 'Recordatorio',
    category: 'Recordatorio',
    body: 'Hola {{nombre}}, te escribo para recordarte lo que charlamos. ¿Seguimos en contacto?',
    variables: ['nombre'],
  },
  {
    name: 'Descuento',
    category: 'Descuento',
    body: 'Hola {{nombre}}! Tengo un descuento especial para vos, ¿te interesa que te cuente?',
    variables: ['nombre'],
  },
  {
    name: 'Entrega',
    category: 'Entrega',
    body: 'Hola {{nombre}}, te confirmo que ya está listo/en camino. Cualquier cosa me avisás.',
    variables: ['nombre'],
  },
  {
    name: 'Reseña',
    category: 'Reseña',
    body: 'Hola {{nombre}}! Si te gustó el trabajo, me ayudaría muchísimo que me dejes una reseña.',
    variables: ['nombre'],
  },
  {
    name: 'Referido',
    category: 'Referido',
    body: 'Hola {{nombre}}! Si conocés a alguien que le pueda servir esto, te agradezco si me lo recomendás.',
    variables: ['nombre'],
  },
];

/**
 * Estados de arranque — se seedean una sola vez, la primera vez que el tenant
 * no tiene ningún estado configurado (tenant nuevo). Después son 100%
 * editables/borrables desde `settings`, esta lista no se vuelve a tocar.
 */
const DEFAULT_STATUSES: readonly Omit<StatusConfig, 'id'>[] = [
  { label: 'Posible cliente', order: 1, color: '#9e9e9e', isWon: false, isLost: false, isFinal: false, requiresService: false },
  { label: 'Cotización enviada', order: 2, color: '#9c27b0', isWon: false, isLost: false, isFinal: false, requiresService: true },
  { label: 'Esperando respuesta', order: 3, color: '#2196f3', isWon: false, isLost: false, isFinal: false, requiresService: false },
  { label: 'En proceso', order: 4, color: '#ff9800', isWon: false, isLost: false, isFinal: false, requiresService: true },
  { label: 'Cliente', order: 5, color: '#4caf50', isWon: true, isLost: false, isFinal: false, requiresService: true },
  { label: 'Pendiente pago', order: 6, color: '#ff5722', isWon: true, isLost: false, isFinal: false, requiresService: true },
  { label: 'Finalizado', order: 7, color: '#4caf50', isWon: true, isLost: false, isFinal: true, requiresService: true },
  { label: 'Perdido', order: 8, color: '#f44336', isWon: false, isLost: true, isFinal: true, requiresService: false },
];

/**
 * Estados, plantillas, servicios y categorías — listas chicas y configurables
 * por el usuario, viven bajo `config/` (.docs/architecture.md §6). La
 * Localidad NO vive acá — sigue siendo texto libre directo en
 * `Prospect.locality` (no ameritaba catálogo, a diferencia de Categoría que
 * el usuario sí pidió poder pre-cargar y reutilizar).
 */
@Injectable({ providedIn: 'root' })
export class ConfigRepository extends BaseRepository {
  watchStatuses(): Observable<StatusConfig[]> {
    // RTDB no garantiza orden de embudo — sí garantiza orden de inserción, que
    // no es lo mismo. `order` es el campo pensado para esto; se ordena acá una
    // sola vez para que Settings, los selects y "primer estado del embudo"
    // (default al crear, o al convertir a cliente) sean consistentes en todos lados.
    return this.sync
      .watchCollection<StatusConfig>(STATUSES, this.tenantPath('config', STATUSES))
      .pipe(map((statuses) => [...statuses].sort((a, b) => a.order - b.order)));
  }

  async saveStatus(status: Omit<StatusConfig, 'id'> & { id?: string }): Promise<string> {
    const id = status.id ?? this.generateId();
    await this.sync.write(STATUSES, id, this.tenantPath('config', STATUSES, id), 'set', { ...status, id });
    return id;
  }

  async deleteStatus(id: string): Promise<void> {
    await this.sync.write(STATUSES, id, this.tenantPath('config', STATUSES, id), 'remove');
  }

  /** Se llama una vez al entrar a la app — no hace nada si el tenant ya tiene estados.
   * Lee directo de RTDB (no cache-first) — si no, un cache local viejo (ej. de una
   * cuenta borrada) puede hacer creer que ya hay estados cuando en realidad no hay
   * ninguno en el servidor, y el seed nunca corre. Ver LocalCacheStore. */
  async seedDefaultStatusesIfEmpty(): Promise<void> {
    const current = await this.sync.readCollectionOnce<StatusConfig>(this.tenantPath('config', STATUSES));
    if (current.length > 0) return;
    for (const status of DEFAULT_STATUSES) {
      await this.saveStatus(status);
    }
  }

  watchTemplates(): Observable<MessageTemplate[]> {
    return this.sync.watchCollection<MessageTemplate>(TEMPLATES, this.tenantPath('config', TEMPLATES));
  }

  async saveTemplate(template: Omit<MessageTemplate, 'id'> & { id?: string }): Promise<string> {
    const id = template.id ?? this.generateId();
    await this.sync.write(TEMPLATES, id, this.tenantPath('config', TEMPLATES, id), 'set', { ...template, id });
    return id;
  }

  async deleteTemplate(id: string): Promise<void> {
    await this.sync.write(TEMPLATES, id, this.tenantPath('config', TEMPLATES, id), 'remove');
  }

  /** Se llama una vez al entrar a la app — no hace nada si el tenant ya tiene
   * plantillas. Mismo criterio que `seedDefaultStatusesIfEmpty`: lectura directa,
   * no cache-first. */
  async seedDefaultTemplatesIfEmpty(): Promise<void> {
    const current = await this.sync.readCollectionOnce<MessageTemplate>(this.tenantPath('config', TEMPLATES));
    if (current.length > 0) return;
    for (const template of DEFAULT_TEMPLATES) {
      await this.saveTemplate(template);
    }
  }

  /** Catálogo de lo que vende el usuario (no confundir con `Prospect.category`,
   * que es el rubro del negocio del cliente). Sin seed — cada usuario arma el suyo. */
  watchServices(): Observable<ServiceConfig[]> {
    return this.sync.watchCollection<ServiceConfig>(SERVICES, this.tenantPath('config', SERVICES));
  }

  async saveService(service: Omit<ServiceConfig, 'id'> & { id?: string }): Promise<string> {
    const id = service.id ?? this.generateId();
    await this.sync.write(SERVICES, id, this.tenantPath('config', SERVICES, id), 'set', { ...service, id });
    return id;
  }

  async deleteService(id: string): Promise<void> {
    await this.sync.write(SERVICES, id, this.tenantPath('config', SERVICES, id), 'remove');
  }

  /** Catálogo del rubro de negocio de los clientes (no confundir con Servicios). Sin seed. */
  watchCategories(): Observable<CategoryConfig[]> {
    return this.sync.watchCollection<CategoryConfig>(CATEGORIES, this.tenantPath('config', CATEGORIES));
  }

  async saveCategory(category: Omit<CategoryConfig, 'id'> & { id?: string }): Promise<string> {
    const id = category.id ?? this.generateId();
    await this.sync.write(CATEGORIES, id, this.tenantPath('config', CATEGORIES, id), 'set', { ...category, id });
    return id;
  }

  async deleteCategory(id: string): Promise<void> {
    await this.sync.write(CATEGORIES, id, this.tenantPath('config', CATEGORIES, id), 'remove');
  }
}
