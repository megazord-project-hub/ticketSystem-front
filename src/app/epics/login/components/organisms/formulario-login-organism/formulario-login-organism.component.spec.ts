import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLoginOrganismComponent } from './formulario-login-organism.component';

describe('FormularioLoginOrganismComponent', () => {
  let component: FormularioLoginOrganismComponent;
  let fixture: ComponentFixture<FormularioLoginOrganismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioLoginOrganismComponent]
    });
    fixture = TestBed.createComponent(FormularioLoginOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
