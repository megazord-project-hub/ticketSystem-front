import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundMEmptyStateComponent } from '../empty-state-pagina-nao-encontrada-molecule/empty-state-not-found-molecule.component';

describe('NotFoundMEmptyStateComponent', () => {
  let component: NotFoundMEmptyStateComponent;
  let fixture: ComponentFixture<NotFoundMEmptyStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundMEmptyStateComponent]
    });
    fixture = TestBed.createComponent(NotFoundMEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
