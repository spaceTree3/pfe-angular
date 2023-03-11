import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCertificacionComponent } from './portfolio-certificacion.component';

describe('PortfolioCertificacionComponent', () => {
  let component: PortfolioCertificacionComponent;
  let fixture: ComponentFixture<PortfolioCertificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCertificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
