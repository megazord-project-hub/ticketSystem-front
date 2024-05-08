import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLogadoPageComponent } from './usuario-logado-page.component';

describe('UsuarioLogadoPageComponent', () => {
  let component: UsuarioLogadoPageComponent;
  let fixture: ComponentFixture<UsuarioLogadoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioLogadoPageComponent]
    });
    fixture = TestBed.createComponent(UsuarioLogadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
