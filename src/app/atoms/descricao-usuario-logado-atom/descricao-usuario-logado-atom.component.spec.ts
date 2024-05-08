import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoUsuarioLogadoAtomComponent } from './descricao-usuario-logado-atom.component';

describe('DescricaoUsuarioLogadoAtomComponent', () => {
  let component: DescricaoUsuarioLogadoAtomComponent;
  let fixture: ComponentFixture<DescricaoUsuarioLogadoAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescricaoUsuarioLogadoAtomComponent]
    });
    fixture = TestBed.createComponent(DescricaoUsuarioLogadoAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
