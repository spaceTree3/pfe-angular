import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContenidoComponent } from './portfolio-contenido.component';

describe('PortfolioContenidoComponent', () => {
  let component: PortfolioContenidoComponent;
  let fixture: ComponentFixture<PortfolioContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioContenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
