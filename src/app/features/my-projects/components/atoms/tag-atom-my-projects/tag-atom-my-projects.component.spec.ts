import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAtomMyProjectsComponent } from './tag-atom-my-projects.component';

describe('TagAtomMyProjectsComponent', () => {
  let component: TagAtomMyProjectsComponent;
  let fixture: ComponentFixture<TagAtomMyProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagAtomMyProjectsComponent]
    });
    fixture = TestBed.createComponent(TagAtomMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
