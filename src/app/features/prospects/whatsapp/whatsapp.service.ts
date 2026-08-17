import { Injectable, inject } from '@angular/core';

import { HistoryEventType } from '../../../domain/enums/history-event-type.enum';
import { MessageTemplate } from '../../../domain/models/template.model';
import { Prospect } from '../../../domain/models/prospect.model';
import { Project } from '../../../domain/models/project.model';
import { HistoryRepository } from '../../../data/repositories/history.repository';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';
import { normalizePhone } from '../../../shared/utils/normalize.util';
import { interpolateTemplate } from '../../../shared/utils/template-fields.util';

/**
 * NUNCA automatiza envíos ni usa librerías no oficiales — solo arma el link de
 * WhatsApp Web con el mensaje ya cargado y lo abre en una pestaña nueva, el
 * usuario aprieta "enviar" él mismo. Ver .docs/architecture.md §12.
 */
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly history = inject(HistoryRepository);
  private readonly prospectRepo = inject(ProspectRepository);

  /** `project` es opcional porque no todo prospecto tiene uno todavía — variables
   * como `{{servicio}}` simplemente quedan literales si no hay proyecto. */
  interpolate(template: MessageTemplate, prospect: Prospect, project: Project | null = null): string {
    return interpolateTemplate(template.body, prospect, project);
  }

  async openWithTemplate(prospect: Prospect, template: MessageTemplate | null, project: Project | null = null): Promise<void> {
    const number = normalizePhone(prospect.phone ?? '');
    if (!number) return;

    const message = template ? this.interpolate(template, prospect, project) : '';
    const url = message ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : `https://wa.me/${number}`;
    window.open(url, '_blank', 'noopener');

    await this.prospectRepo.update(prospect.id, { lastContactAt: Date.now() });
    await this.history.log(prospect.id, HistoryEventType.WhatsappOpened, {
      templateId: template?.id ?? null,
      templateName: template?.name ?? null,
    });
  }
}
