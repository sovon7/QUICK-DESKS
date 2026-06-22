import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FunGameComponent } from './fun-game.component';

describe('FunGameComponent', () => {
  let component: FunGameComponent;
  let fixture: ComponentFixture<FunGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunGameComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FunGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
