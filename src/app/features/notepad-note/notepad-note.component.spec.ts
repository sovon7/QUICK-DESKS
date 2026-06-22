import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotepadNoteComponent } from './notepad-note.component';

describe('NotepadNoteComponent', () => {
  let component: NotepadNoteComponent;
  let fixture: ComponentFixture<NotepadNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotepadNoteComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NotepadNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
