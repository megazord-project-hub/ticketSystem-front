import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variante1PaginaPadraoTemplateComponent } from './variante-1-pagina-padrao-template.component';

describe('Variante1PaginaPadraoTemplateComponent', () => {
  let component: Variante1PaginaPadraoTemplateComponent;
  let fixture: ComponentFixture<Variante1PaginaPadraoTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Variante1PaginaPadraoTemplateComponent]
    });
    fixture = TestBed.createComponent(Variante1PaginaPadraoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
