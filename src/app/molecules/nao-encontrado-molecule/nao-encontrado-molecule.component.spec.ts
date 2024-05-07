import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontradoMoleculeComponent } from './nao-encontrado-molecule.component';

describe('NaoEncontradoMoleculeComponent', () => {
  let component: NaoEncontradoMoleculeComponent;
  let fixture: ComponentFixture<NaoEncontradoMoleculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoEncontradoMoleculeComponent]
    });
    fixture = TestBed.createComponent(NaoEncontradoMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
