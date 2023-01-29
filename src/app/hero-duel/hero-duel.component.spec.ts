import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDuelComponent } from './hero-duel.component';

describe('HeroDuelComponent', () => {
  let component: HeroDuelComponent;
  let fixture: ComponentFixture<HeroDuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
