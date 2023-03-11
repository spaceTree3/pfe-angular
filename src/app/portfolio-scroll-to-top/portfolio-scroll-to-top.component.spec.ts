import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioScrollToTopComponent } from './portfolio-scroll-to-top.component';

describe('PortfolioScrollToTopComponent', () => {
  let component: PortfolioScrollToTopComponent;
  let fixture: ComponentFixture<PortfolioScrollToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioScrollToTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
