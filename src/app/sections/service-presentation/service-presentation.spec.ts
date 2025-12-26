import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePresentation } from './service-presentation';

describe('ServicePresentation', () => {
  let component: ServicePresentation;
  let fixture: ComponentFixture<ServicePresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePresentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
