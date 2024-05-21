import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrganismLoginComponent } from './form-organism-login.component';

describe('FormOrganismLoginComponent', () => {
  let component: FormOrganismLoginComponent;
  let fixture: ComponentFixture<FormOrganismLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOrganismLoginComponent]
    });
    fixture = TestBed.createComponent(FormOrganismLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
