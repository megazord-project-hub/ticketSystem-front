import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagEstaticaAtomComponent } from './tag-estatica-atom.component';

describe('TagEstaticaAtomComponent', () => {
  let component: TagEstaticaAtomComponent;
  let fixture: ComponentFixture<TagEstaticaAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagEstaticaAtomComponent]
    });
    fixture = TestBed.createComponent(TagEstaticaAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
