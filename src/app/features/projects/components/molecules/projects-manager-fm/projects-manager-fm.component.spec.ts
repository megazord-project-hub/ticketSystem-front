import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManagerFmComponent } from './projects-manager-fm.component';

describe('ProjectsManagerFmComponent', () => {
  let component: ProjectsManagerFmComponent;
  let fixture: ComponentFixture<ProjectsManagerFmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsManagerFmComponent]
    });
    fixture = TestBed.createComponent(ProjectsManagerFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
