import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { Prospect } from '../../../domain/models/prospect.model';
import { CategoryConfig } from '../../../domain/models/category.model';
import { normalizeName } from '../../../shared/utils/normalize.util';
import { joinPhone, normalizeWhatsappUser, splitPhone } from '../../../shared/utils/phone.util';

export interface ProspectEditDialogData {
  prospect: Prospect;
  categories: CategoryConfig[];
  statuses: { id: string; label: string }[];
  dialCodes: { code: string; label: string }[];
}

@Component({
  selector: 'app-prospect-edit-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './prospect-edit-dialog.html',
  styleUrl: './prospect-edit-dialog.scss',
})
export class ProspectEditDialog {
  private readonly dialogRef = inject(MatDialogRef<ProspectEditDialog>);
  readonly data = inject<ProspectEditDialogData>(MAT_DIALOG_DATA);

  private readonly initialPhone = splitPhone(this.data.prospect.phone);

  form = {
    name: this.data.prospect.name,
    dialCode: this.initialPhone.dialCode,
    phone: this.initialPhone.localNumber,
    whatsappUser: this.data.prospect.whatsappUser ?? '',
    categories: [...this.data.prospect.categories],
    statusId: this.data.prospect.statusId || '',
  };

  save(): void {
    this.dialogRef.close({
      name: this.form.name,
      normalizedName: normalizeName(this.form.name),
      phone: joinPhone(this.form.dialCode, this.form.phone),
      whatsappUser: normalizeWhatsappUser(this.form.whatsappUser) || null,
      categories: this.form.categories,
      statusId: this.form.statusId,
    });
  }

  /** Sin teléfono ni usuario de WhatsApp no hay forma de contactar al cliente. */
  get hasContact(): boolean {
    return !!joinPhone(this.form.dialCode, this.form.phone) || !!normalizeWhatsappUser(this.form.whatsappUser);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
