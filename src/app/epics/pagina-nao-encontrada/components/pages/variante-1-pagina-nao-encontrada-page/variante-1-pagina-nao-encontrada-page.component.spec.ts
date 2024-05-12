import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variante1PaginaNaoEncontradaPage } from './variante-1-pagina-nao-encontrada-page.component';

describe('Variante1PaginaNaoEncontradaPage', () => {
  let component: Variante1PaginaNaoEncontradaPage;
  let fixture: ComponentFixture<Variante1PaginaNaoEncontradaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Variante1PaginaNaoEncontradaPage]
    });
    fixture = TestBed.createComponent(Variante1PaginaNaoEncontradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
