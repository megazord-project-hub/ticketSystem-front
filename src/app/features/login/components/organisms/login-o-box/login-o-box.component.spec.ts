import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOBoxComponent } from './login-o-box.component';

describe('LoginOBoxComponent', () => {
  let component: LoginOBoxComponent;
  let fixture: ComponentFixture<LoginOBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginOBoxComponent]
    });
    fixture = TestBed.createComponent(LoginOBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
