import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsANewProjectButtonComponent } from './my-projects-a-new-project-button.component';

describe('MyProjectsANewProjectButtonComponent', () => {
  let component: MyProjectsANewProjectButtonComponent;
  let fixture: ComponentFixture<MyProjectsANewProjectButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsANewProjectButtonComponent]
    });
    fixture = TestBed.createComponent(MyProjectsANewProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
