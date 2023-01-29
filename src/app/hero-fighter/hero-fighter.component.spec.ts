import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFighterComponent } from './hero-fighter.component';

describe('HeroFighterComponent', () => {
  let component: HeroFighterComponent;
  let fixture: ComponentFixture<HeroFighterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFighterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
