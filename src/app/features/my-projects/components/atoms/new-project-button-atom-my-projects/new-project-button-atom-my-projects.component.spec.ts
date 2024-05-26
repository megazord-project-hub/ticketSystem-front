import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectButtonAtomMyProjectsComponent } from './new-project-button-atom-my-projects.component';

describe('NewProjectButtonAtomMyProjectsComponent', () => {
  let component: NewProjectButtonAtomMyProjectsComponent;
  let fixture: ComponentFixture<NewProjectButtonAtomMyProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProjectButtonAtomMyProjectsComponent]
    });
    fixture = TestBed.createComponent(NewProjectButtonAtomMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
