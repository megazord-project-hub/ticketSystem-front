import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMoleculeComponent } from './login-molecule.component';

describe('LoginMoleculeComponent', () => {
  let component: LoginMoleculeComponent;
  let fixture: ComponentFixture<LoginMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginMoleculeComponent]
    });
    fixture = TestBed.createComponent(LoginMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
