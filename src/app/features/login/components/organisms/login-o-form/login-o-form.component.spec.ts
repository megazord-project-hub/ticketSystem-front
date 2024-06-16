import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOFormComponent } from './login-o-form.component';

describe('LoginOFormComponent', () => {
  let component: LoginOFormComponent;
  let fixture: ComponentFixture<LoginOFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginOFormComponent]
    });
    fixture = TestBed.createComponent(LoginOFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
