import { Injectable, inject } from '@angular/core';

import { HistoryEventType } from '../../../domain/enums/history-event-type.enum';
import { MessageTemplate } from '../../../domain/models/template.model';
import { Prospect } from '../../../domain/models/prospect.model';
import { HistoryRepository } from '../../../data/repositories/history.repository';
import { normalizePhone } from '../../../shared/utils/normalize.util';

/**
 * NUNCA automatiza envíos ni usa librerías no oficiales — solo arma el link de
 * WhatsApp Web con el mensaje ya cargado y lo abre en una pestaña nueva, el
 * usuario aprieta "enviar" él mismo. Ver .docs/architecture.md §12.
 */
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly history = inject(HistoryRepository);

  interpolate(template: MessageTemplate, prospect: Prospect): string {
    return template.body.replace(/\{\{\s*nombre\s*\}\}/gi, prospect.name);
  }

  async openWithTemplate(prospect: Prospect, template: MessageTemplate | null): Promise<void> {
    const number = normalizePhone(prospect.phone ?? '');
    if (!number) return;

    const message = template ? this.interpolate(template, prospect) : '';
    const url = message ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : `https://wa.me/${number}`;
    window.open(url, '_blank', 'noopener');

    await this.history.log(prospect.id, HistoryEventType.WhatsappOpened, {
      templateId: template?.id ?? null,
      templateName: template?.name ?? null,
    });
  }
}
