import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotepadNoteComponent } from './notepad-note.component';

const routes: Routes = [
  { path: '', component: NotepadNoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotepadNoteRoutingModule { }
