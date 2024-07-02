import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCardFoComponent } from './projects-card-fo.component';

describe('ProjectsCardFoComponent', () => {
  let component: ProjectsCardFoComponent;
  let fixture: ComponentFixture<ProjectsCardFoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsCardFoComponent]
    });
    fixture = TestBed.createComponent(ProjectsCardFoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
