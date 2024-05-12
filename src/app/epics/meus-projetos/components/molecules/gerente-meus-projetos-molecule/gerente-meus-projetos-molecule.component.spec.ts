import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteMeusProjetosMoleculeComponent } from './gerente-meus-projetos-molecule.component';

describe('GerenteMeusProjetosMoleculeComponent', () => {
  let component: GerenteMeusProjetosMoleculeComponent;
  let fixture: ComponentFixture<GerenteMeusProjetosMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenteMeusProjetosMoleculeComponent]
    });
    fixture = TestBed.createComponent(GerenteMeusProjetosMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
