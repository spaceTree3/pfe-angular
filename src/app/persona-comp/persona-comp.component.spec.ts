import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCompComponent } from './persona-comp.component';

describe('PersonaCompComponent', () => {
  let component: PersonaCompComponent;
  let fixture: ComponentFixture<PersonaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
