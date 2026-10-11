import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import { Prospect } from '../../../domain/models/prospect.model';
import { ProspectRepository } from '../../../data/repositories/prospect.repository';

export interface ProspectInteractionsDialogData {
  prospect: Prospect;
}

interface Note {
  id: string;
  text: string;
  createdAt: Date;
}

interface Followup {
  id: string;
  description: string;
  date: string;
  time: string;
  status: 'pending' | 'done';
}

@Component({
  selector: 'app-prospect-interactions-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    DatePipe,
  ],
  templateUrl: './prospect-interactions-dialog.html',
  styleUrl: './prospect-interactions-dialog.scss',
})
export class ProspectInteractionsDialog {
  private readonly dialogRef = inject(MatDialogRef<ProspectInteractionsDialog>);
  private readonly prospectRepo = inject(ProspectRepository);
  readonly data = inject<ProspectInteractionsDialogData>(MAT_DIALOG_DATA);

  notes: Note[] = [];
  followups: Followup[] = [];
  newNoteText = '';
  newFollowupDate = '';
  newFollowupTime = '';
  newFollowupDescription = '';

  constructor() {
    // Las notas y seguimientos se cargarían de una colección separada en Firebase
    // Por ahora, inicializamos vacíos
    this.notes = [];
    this.followups = [];
  }

  addNote(): void {
    if (!this.newNoteText.trim()) return;
    const note: Note = {
      id: Date.now().toString(),
      text: this.newNoteText,
      createdAt: new Date(),
    };
    this.notes.unshift(note);
    this.newNoteText = '';
    this.saveChanges();
  }

  deleteNote(id: string): void {
    this.notes = this.notes.filter(n => n.id !== id);
    this.saveChanges();
  }

  addFollowup(): void {
    if (!this.newFollowupDate || !this.newFollowupDescription.trim()) return;
    const followup: Followup = {
      id: Date.now().toString(),
      description: this.newFollowupDescription,
      date: this.newFollowupDate,
      time: this.newFollowupTime,
      status: 'pending',
    };
    this.followups.unshift(followup);
    this.newFollowupDate = '';
    this.newFollowupTime = '';
    this.newFollowupDescription = '';
    this.saveChanges();
  }

  toggleFollowup(id: string, done: boolean): void {
    const followup = this.followups.find(f => f.id === id);
    if (followup) {
      followup.status = done ? 'done' : 'pending';
      this.saveChanges();
    }
  }

  deleteFollowup(id: string): void {
    this.followups = this.followups.filter(f => f.id !== id);
    this.saveChanges();
  }

  private saveChanges(): void {
    // Los cambios se guardan en memoria, pero no se persisten a la BD
    // (el modelo Prospect no soporta notas/seguimientos como campos directos)
  }

  close(): void {
    this.dialogRef.close();
  }
}
