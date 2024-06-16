import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPLayoutComponent } from './login-p-layout.component';

describe('LoginPLayoutComponent', () => {
  let component: LoginPLayoutComponent;
  let fixture: ComponentFixture<LoginPLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPLayoutComponent]
    });
    fixture = TestBed.createComponent(LoginPLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
