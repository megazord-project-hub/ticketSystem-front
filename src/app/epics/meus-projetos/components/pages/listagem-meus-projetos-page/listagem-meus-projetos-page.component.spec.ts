import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMeusProjetosPageComponent } from './listagem-meus-projetos-page.component';

describe('ListagemMeusProjetosPageComponent', () => {
  let component: ListagemMeusProjetosPageComponent;
  let fixture: ComponentFixture<ListagemMeusProjetosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemMeusProjetosPageComponent]
    });
    fixture = TestBed.createComponent(ListagemMeusProjetosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
