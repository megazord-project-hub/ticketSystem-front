import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageLoginComponent } from './auth-page-login.component';

describe('AuthPageLoginComponent', () => {
  let component: AuthPageLoginComponent;
  let fixture: ComponentFixture<AuthPageLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthPageLoginComponent]
    });
    fixture = TestBed.createComponent(AuthPageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
