import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTagFaComponent } from './projects-tag-fa.component';

describe('ProjectsTagFaComponent', () => {
  let component: ProjectsTagFaComponent;
  let fixture: ComponentFixture<ProjectsTagFaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsTagFaComponent]
    });
    fixture = TestBed.createComponent(ProjectsTagFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
