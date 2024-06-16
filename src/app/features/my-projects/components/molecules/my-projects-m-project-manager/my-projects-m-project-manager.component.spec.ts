import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsMProjectManagerComponent } from './my-projects-m-project-manager.component';

describe('MyProjectsMProjectManagerComponent', () => {
  let component: MyProjectsMProjectManagerComponent;
  let fixture: ComponentFixture<MyProjectsMProjectManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsMProjectManagerComponent]
    });
    fixture = TestBed.createComponent(MyProjectsMProjectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
