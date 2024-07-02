import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPageFpComponent } from './projects-page-fp.component';

describe('ProjectsPageFpComponent', () => {
  let component: ProjectsPageFpComponent;
  let fixture: ComponentFixture<ProjectsPageFpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPageFpComponent]
    });
    fixture = TestBed.createComponent(ProjectsPageFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
