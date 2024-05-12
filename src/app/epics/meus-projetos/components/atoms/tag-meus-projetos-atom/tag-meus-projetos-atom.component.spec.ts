import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMeusProjetosAtomComponent } from './tag-meus-projetos-atom.component';

describe('TagMeusProjetosAtomComponent', () => {
  let component: TagMeusProjetosAtomComponent;
  let fixture: ComponentFixture<TagMeusProjetosAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagMeusProjetosAtomComponent]
    });
    fixture = TestBed.createComponent(TagMeusProjetosAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
