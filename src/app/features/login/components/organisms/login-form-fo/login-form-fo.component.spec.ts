import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormFoComponent } from './login-form-fo.component';

describe('LoginFormFoComponent', () => {
  let component: LoginFormFoComponent;
  let fixture: ComponentFixture<LoginFormFoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormFoComponent]
    });
    fixture = TestBed.createComponent(LoginFormFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
