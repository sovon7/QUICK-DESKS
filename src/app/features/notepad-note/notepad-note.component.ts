import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notepad-note',
  templateUrl: './notepad-note.component.html',
  styleUrls: ['./notepad-note.component.scss']
})
export class NotepadNoteComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
