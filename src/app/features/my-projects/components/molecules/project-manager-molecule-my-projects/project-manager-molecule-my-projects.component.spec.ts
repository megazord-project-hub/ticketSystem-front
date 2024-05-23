import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerMoleculeMyProjectsComponent } from './project-manager-molecule-my-projects.component';

describe('ProjectManagerMoleculeMyProjectsComponent', () => {
  let component: ProjectManagerMoleculeMyProjectsComponent;
  let fixture: ComponentFixture<ProjectManagerMoleculeMyProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectManagerMoleculeMyProjectsComponent]
    });
    fixture = TestBed.createComponent(ProjectManagerMoleculeMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
