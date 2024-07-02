import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBoxFoComponent } from './login-box-fo.component';

describe('LoginBoxFoComponent', () => {
  let component: LoginBoxFoComponent;
  let fixture: ComponentFixture<LoginBoxFoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginBoxFoComponent]
    });
    fixture = TestBed.createComponent(LoginBoxFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
