import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokesFunnyComponent } from './jokes-funny.component';

describe('JokesFunnyComponent', () => {
  let component: JokesFunnyComponent;
  let fixture: ComponentFixture<JokesFunnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokesFunnyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(JokesFunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
