import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundEmptyStateFmComponent } from '../empty-state-pagina-nao-encontrada-molecule/empty-state-not-found-molecule.component';

describe('NotFoundEmptyStateFmComponent', () => {
  let component: NotFoundEmptyStateFmComponent;
  let fixture: ComponentFixture<NotFoundEmptyStateFmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundEmptyStateFmComponent]
    });
    fixture = TestBed.createComponent(NotFoundEmptyStateFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
