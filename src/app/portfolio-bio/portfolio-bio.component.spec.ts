import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBioComponent } from './portfolio-bio.component';

describe('PortfolioBioComponent', () => {
  let component: PortfolioBioComponent;
  let fixture: ComponentFixture<PortfolioBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
