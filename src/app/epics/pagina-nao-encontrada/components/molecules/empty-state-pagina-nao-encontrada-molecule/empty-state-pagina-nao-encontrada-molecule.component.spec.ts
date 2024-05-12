import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStatePaginaNaoEncontradaMolecule } from './empty-state-pagina-nao-encontrada-molecule.component';

describe('EmptyStatePaginaNaoEncontradaMolecule', () => {
  let component: EmptyStatePaginaNaoEncontradaMolecule;
  let fixture: ComponentFixture<EmptyStatePaginaNaoEncontradaMolecule>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyStatePaginaNaoEncontradaMolecule]
    });
    fixture = TestBed.createComponent(EmptyStatePaginaNaoEncontradaMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
