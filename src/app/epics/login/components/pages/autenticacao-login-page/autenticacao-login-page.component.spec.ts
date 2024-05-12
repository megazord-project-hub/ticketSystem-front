import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoLoginPageComponent } from './autenticacao-login-page.component';

describe('AutenticacaoLoginPageComponent', () => {
  let component: AutenticacaoLoginPageComponent;
  let fixture: ComponentFixture<AutenticacaoLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutenticacaoLoginPageComponent]
    });
    fixture = TestBed.createComponent(AutenticacaoLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
