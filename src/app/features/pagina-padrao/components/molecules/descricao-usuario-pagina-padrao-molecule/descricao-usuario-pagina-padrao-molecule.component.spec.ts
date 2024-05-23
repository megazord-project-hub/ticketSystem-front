import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoUsuarioPaginaPadraoMoleculeComponent } from './descricao-usuario-pagina-padrao-molecule.component';

describe('DescricaoUsuarioPaginaPadraoMoleculeComponent', () => {
  let component: DescricaoUsuarioPaginaPadraoMoleculeComponent;
  let fixture: ComponentFixture<DescricaoUsuarioPaginaPadraoMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescricaoUsuarioPaginaPadraoMoleculeComponent]
    });
    fixture = TestBed.createComponent(DescricaoUsuarioPaginaPadraoMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
