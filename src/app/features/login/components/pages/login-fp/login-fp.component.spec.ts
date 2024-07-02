import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFpComponent } from './login-fp.component';

describe('LoginFpComponent', () => {
  let component: LoginFpComponent;
  let fixture: ComponentFixture<LoginFpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFpComponent]
    });
    fixture = TestBed.createComponent(LoginFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
