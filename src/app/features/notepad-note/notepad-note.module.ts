import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadNoteRoutingModule } from './notepad-note-routing.module';
import { NotepadNoteComponent } from './notepad-note.component';

@NgModule({
  declarations: [NotepadNoteComponent],
  imports: [CommonModule, NotepadNoteRoutingModule]
})
export class NotepadNoteModule { }
