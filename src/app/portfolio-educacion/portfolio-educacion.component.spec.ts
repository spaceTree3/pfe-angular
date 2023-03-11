import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEducacionComponent } from './portfolio-educacion.component';

describe('PortfolioEducacionComponent', () => {
  let component: PortfolioEducacionComponent;
  let fixture: ComponentFixture<PortfolioEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
