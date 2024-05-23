import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardOrganismMyProjectsComponent } from './project-card-organism-my-projects.component';

describe('ProjectCardOrganismMyProjectsComponent', () => {
  let component: ProjectCardOrganismMyProjectsComponent;
  let fixture: ComponentFixture<ProjectCardOrganismMyProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardOrganismMyProjectsComponent]
    });
    fixture = TestBed.createComponent(ProjectCardOrganismMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
