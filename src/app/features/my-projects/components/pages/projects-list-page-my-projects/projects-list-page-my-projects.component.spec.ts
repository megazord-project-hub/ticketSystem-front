import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListPageMyProjectsComponent } from './projects-list-page-my-projects.component';

describe('ProjectsListPageMyProjectsComponent', () => {
  let component: ProjectsListPageMyProjectsComponent;
  let fixture: ComponentFixture<ProjectsListPageMyProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsListPageMyProjectsComponent]
    });
    fixture = TestBed.createComponent(ProjectsListPageMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
