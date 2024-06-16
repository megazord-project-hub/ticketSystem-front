import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsOProjectCardComponent } from './my-projects-o-project-card.component';

describe('MyProjectsOProjectCardComponent', () => {
  let component: MyProjectsOProjectCardComponent;
  let fixture: ComponentFixture<MyProjectsOProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsOProjectCardComponent]
    });
    fixture = TestBed.createComponent(MyProjectsOProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
