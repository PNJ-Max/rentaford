import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroScroll } from './hero-scroll';

describe('HeroScroll', () => {
  let component: HeroScroll;
  let fixture: ComponentFixture<HeroScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
