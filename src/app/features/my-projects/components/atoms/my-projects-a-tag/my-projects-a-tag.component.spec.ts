import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsATagComponent } from './my-projects-a-tag.component';

describe('MyProjectsATagComponent', () => {
  let component: MyProjectsATagComponent;
  let fixture: ComponentFixture<MyProjectsATagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsATagComponent]
    });
    fixture = TestBed.createComponent(MyProjectsATagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
