import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { firstValueFrom } from 'rxjs';

import { ProjectRepository } from '../../../../data/repositories/project.repository';
import { ProjectNote } from '../../../../domain/models/project.model';
import { ConfirmDialog, ConfirmDialogData } from '../../../../shared/dialogs/confirm-dialog/confirm-dialog';

export interface NotesDialogData {
  prospectId: string;
  projectId: string;
}

@Component({
  selector: 'app-notes-dialog',
  standalone: true,
  imports: [FormsModule, DatePipe, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTooltipModule],
  templateUrl: './notes-dialog.html',
  styleUrl: './notes-dialog.scss',
})
export class NotesDialog {
  private readonly projectRepo = inject(ProjectRepository);
  private readonly dialog = inject(MatDialog);
  readonly data = inject<NotesDialogData>(MAT_DIALOG_DATA);

  private readonly projects = toSignal(this.projectRepo.watchByProspect(this.data.prospectId), { initialValue: [] });
  readonly project = computed(() => this.projects().find((p) => p.id === this.data.projectId) ?? null);
  readonly sortedNotes = computed(() => [...(this.project()?.notes ?? [])].sort((a, b) => b.createdAt - a.createdAt));

  readonly editingId = signal<string | null>(null);
  readonly text = signal('');
  readonly saving = signal(false);

  startEdit(note: ProjectNote): void {
    this.editingId.set(note.id);
    this.text.set(note.text);
  }

  cancelEdit(): void {
    this.editingId.set(null);
    this.text.set('');
  }

  async save(): Promise<void> {
    const project = this.project();
    const text = this.text().trim();
    if (!project || !text || this.saving()) return;

    this.saving.set(true);
    try {
      const editingId = this.editingId();
      const notes = editingId
        ? project.notes.map((n) => (n.id === editingId ? { ...n, text } : n))
        : [...project.notes, { id: crypto.randomUUID(), text, createdAt: Date.now() }];
      await this.projectRepo.update(project.id, { notes });
      this.cancelEdit();
    } finally {
      this.saving.set(false);
    }
  }

  async remove(note: ProjectNote): Promise<void> {
    const project = this.project();
    if (!project) return;
    const ok = await firstValueFrom(
      this.dialog
        .open<ConfirmDialog, ConfirmDialogData, boolean>(ConfirmDialog, {
          width: '380px',
          data: { title: 'Eliminar nota', message: '¿Seguro que quieres eliminar esta nota?', confirmLabel: 'Eliminar', danger: true, icon: 'delete' },
        })
        .afterClosed(),
    );
    if (!ok) return;
    if (this.editingId() === note.id) this.cancelEdit();
    await this.projectRepo.update(project.id, { notes: project.notes.filter((n) => n.id !== note.id) });
  }
}
