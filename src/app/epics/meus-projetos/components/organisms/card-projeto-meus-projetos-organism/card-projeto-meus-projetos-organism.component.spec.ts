import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjetoMeusProjetosOrganismComponent } from './card-projeto-meus-projetos-organism.component';

describe('CardProjetoMeusProjetosOrganismComponent', () => {
  let component: CardProjetoMeusProjetosOrganismComponent;
  let fixture: ComponentFixture<CardProjetoMeusProjetosOrganismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProjetoMeusProjetosOrganismComponent]
    });
    fixture = TestBed.createComponent(CardProjetoMeusProjetosOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
