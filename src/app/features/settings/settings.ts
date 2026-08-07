import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { ConfigRepository } from '../../data/repositories/config.repository';
import { MoneyInputDirective } from '../../shared/directives/money-input.directive';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { StatusConfig } from '../../domain/models/status.model';
import { MessageTemplate } from '../../domain/models/template.model';
import { ServiceConfig } from '../../domain/models/service.model';
import { CategoryConfig } from '../../domain/models/category.model';

const EMPTY_STATUS_FORM = { label: '', color: '#2196f3', order: 0, isWon: false, isLost: false, isFinal: false, requiresService: false };
const EMPTY_TEMPLATE_FORM = { name: '', category: '', body: '' };
const EMPTY_SERVICE_FORM = { name: '', description: '', price: null as number | null };
const EMPTY_CATEGORY_FORM = { name: '' };

/** CRUD de estados/plantillas/servicios/categorías — lo único que amerita lista
 * pre-configurada. La Localidad sigue siendo texto libre directo en el prospecto
 * (ver Prospect.locality), no vive acá. "Servicio" es distinto de "Categoría":
 * categoría es el rubro del NEGOCIO del cliente, servicio es lo que PandaLead
 * vende (con precio). Ver .docs/architecture.md §11 y §12.
 *
 * Cada catálogo sigue el mismo patrón editar/agregar: un `editingXId` signal
 * marca si el form de abajo está editando un ítem existente o cargando uno
 * nuevo — mismo botón, cambia de "Agregar" a "Guardar cambios" según el caso. */
@Component({
  selector: 'app-settings',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MoneyInputDirective,
    MoneyPipe,
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  private readonly configRepo = inject(ConfigRepository);

  readonly statuses = toSignal(this.configRepo.watchStatuses(), { initialValue: [] as StatusConfig[] });
  readonly templates = toSignal(this.configRepo.watchTemplates(), { initialValue: [] as MessageTemplate[] });
  readonly services = toSignal(this.configRepo.watchServices(), { initialValue: [] as ServiceConfig[] });
  readonly categories = toSignal(this.configRepo.watchCategories(), { initialValue: [] as CategoryConfig[] });

  readonly statusForm = signal({ ...EMPTY_STATUS_FORM });
  readonly templateForm = signal({ ...EMPTY_TEMPLATE_FORM });
  readonly serviceForm = signal({ ...EMPTY_SERVICE_FORM });
  readonly categoryForm = signal({ ...EMPTY_CATEGORY_FORM });

  readonly editingStatusId = signal<string | null>(null);
  readonly editingTemplateId = signal<string | null>(null);
  readonly editingServiceId = signal<string | null>(null);
  readonly editingCategoryId = signal<string | null>(null);

  // --- Estados ---

  editStatus(status: StatusConfig): void {
    this.editingStatusId.set(status.id);
    this.statusForm.set({
      label: status.label,
      color: status.color,
      order: status.order,
      isWon: status.isWon,
      isLost: status.isLost,
      isFinal: status.isFinal,
      requiresService: status.requiresService ?? false,
    });
  }

  cancelEditStatus(): void {
    this.editingStatusId.set(null);
    this.statusForm.set({ ...EMPTY_STATUS_FORM });
  }

  async addStatus(): Promise<void> {
    const value = this.statusForm();
    if (!value.label.trim()) return;
    const editingId = this.editingStatusId();
    await this.configRepo.saveStatus({
      ...value,
      id: editingId ?? undefined,
      order: editingId ? value.order : this.statuses().length + 1,
    });
    this.statusForm.set({ ...EMPTY_STATUS_FORM });
    this.editingStatusId.set(null);
  }

  async deleteStatus(id: string): Promise<void> {
    if (!confirm('¿Eliminar este estado? Los clientes que lo tengan asignado quedan con un estado inexistente.')) return;
    if (this.editingStatusId() === id) this.cancelEditStatus();
    await this.configRepo.deleteStatus(id);
  }

  // --- Plantillas ---

  editTemplate(template: MessageTemplate): void {
    this.editingTemplateId.set(template.id);
    this.templateForm.set({ name: template.name, category: template.category, body: template.body });
  }

  cancelEditTemplate(): void {
    this.editingTemplateId.set(null);
    this.templateForm.set({ ...EMPTY_TEMPLATE_FORM });
  }

  async addTemplate(): Promise<void> {
    const value = this.templateForm();
    if (!value.name.trim() || !value.body.trim()) return;
    const variables = [...value.body.matchAll(/\{\{\s*(\w+)\s*\}\}/g)].map((m) => m[1]);
    await this.configRepo.saveTemplate({ ...value, variables, id: this.editingTemplateId() ?? undefined });
    this.templateForm.set({ ...EMPTY_TEMPLATE_FORM });
    this.editingTemplateId.set(null);
  }

  async deleteTemplate(id: string): Promise<void> {
    if (!confirm('¿Eliminar esta plantilla?')) return;
    if (this.editingTemplateId() === id) this.cancelEditTemplate();
    await this.configRepo.deleteTemplate(id);
  }

  // --- Servicios ---

  editService(service: ServiceConfig): void {
    this.editingServiceId.set(service.id);
    this.serviceForm.set({ name: service.name, description: service.description ?? '', price: service.price ?? null });
  }

  cancelEditService(): void {
    this.editingServiceId.set(null);
    this.serviceForm.set({ ...EMPTY_SERVICE_FORM });
  }

  async addService(): Promise<void> {
    const value = this.serviceForm();
    if (!value.name.trim()) return;
    await this.configRepo.saveService({
      name: value.name,
      description: value.description || undefined,
      price: value.price ?? undefined,
      id: this.editingServiceId() ?? undefined,
    });
    this.serviceForm.set({ ...EMPTY_SERVICE_FORM });
    this.editingServiceId.set(null);
  }

  async deleteService(id: string): Promise<void> {
    if (!confirm('¿Eliminar este servicio? Los proyectos que ya lo tengan asignado no se modifican (el precio quedó copiado ahí).')) return;
    if (this.editingServiceId() === id) this.cancelEditService();
    await this.configRepo.deleteService(id);
  }

  // --- Categorías ---

  editCategory(category: CategoryConfig): void {
    this.editingCategoryId.set(category.id);
    this.categoryForm.set({ name: category.name });
  }

  cancelEditCategory(): void {
    this.editingCategoryId.set(null);
    this.categoryForm.set({ ...EMPTY_CATEGORY_FORM });
  }

  async addCategory(): Promise<void> {
    const value = this.categoryForm();
    if (!value.name.trim()) return;
    await this.configRepo.saveCategory({ name: value.name, id: this.editingCategoryId() ?? undefined });
    this.categoryForm.set({ ...EMPTY_CATEGORY_FORM });
    this.editingCategoryId.set(null);
  }

  async deleteCategory(id: string): Promise<void> {
    if (!confirm('¿Eliminar esta categoría?')) return;
    if (this.editingCategoryId() === id) this.cancelEditCategory();
    await this.configRepo.deleteCategory(id);
  }
}
