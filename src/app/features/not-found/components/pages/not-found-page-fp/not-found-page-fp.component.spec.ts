import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageFpComponent } from '../variante-1-pagina-nao-encontrada-page/variante-1-not-found-page.component';

describe('NotFoundPageFpComponent', () => {
  let component: NotFoundPageFpComponent;
  let fixture: ComponentFixture<NotFoundPageFpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPageFpComponent]
    });
    fixture = TestBed.createComponent(NotFoundPageFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
