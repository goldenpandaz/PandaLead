import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { MessageTemplate } from '../../../../domain/models/template.model';
import { ConfigRepository } from '../../../../data/repositories/config.repository';

/** Elegí una plantilla (o ninguna) antes de abrir WhatsApp — .docs/architecture.md §12. */
@Component({
  selector: 'app-whatsapp-template-picker',
  imports: [MatButtonModule, MatDialogModule, MatListModule],
  templateUrl: './whatsapp-template-picker.html',
  styleUrl: './whatsapp-template-picker.scss',
})
export class WhatsappTemplatePicker {
  private readonly dialogRef = inject(MatDialogRef<WhatsappTemplatePicker>);
  private readonly configRepo = inject(ConfigRepository);

  readonly templates = toSignal(this.configRepo.watchTemplates(), { initialValue: [] as MessageTemplate[] });

  choose(template: MessageTemplate | null): void {
    this.dialogRef.close(template);
  }
}
