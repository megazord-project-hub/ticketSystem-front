import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPLayoutComponent } from '../variante-1-pagina-nao-encontrada-page/variante-1-not-found-page.component';

describe('NotFoundPLayoutComponent', () => {
  let component: NotFoundPLayoutComponent;
  let fixture: ComponentFixture<NotFoundPLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPLayoutComponent]
    });
    fixture = TestBed.createComponent(NotFoundPLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
