import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLoginComponent } from './portfolio-login.component';

describe('PortfolioLoginComponent', () => {
  let component: PortfolioLoginComponent;
  let fixture: ComponentFixture<PortfolioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
