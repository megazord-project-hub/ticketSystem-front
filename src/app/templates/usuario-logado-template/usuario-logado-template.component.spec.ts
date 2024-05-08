import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLogadoTemplateComponent } from './usuario-logado-template.component';

describe('UsuarioLogadoTemplateComponent', () => {
  let component: UsuarioLogadoTemplateComponent;
  let fixture: ComponentFixture<UsuarioLogadoTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioLogadoTemplateComponent]
    });
    fixture = TestBed.createComponent(UsuarioLogadoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
