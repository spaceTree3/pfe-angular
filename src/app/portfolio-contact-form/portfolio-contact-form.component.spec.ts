import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContactFormComponent } from './portfolio-contact-form.component';

describe('PortfolioContactFormComponent', () => {
  let component: PortfolioContactFormComponent;
  let fixture: ComponentFixture<PortfolioContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
