import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsPLayoutComponent } from './my-projects-p-layout.component';

describe('MyProjectsPLayoutComponent', () => {
  let component: MyProjectsPLayoutComponent;
  let fixture: ComponentFixture<MyProjectsPLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsPLayoutComponent]
    });
    fixture = TestBed.createComponent(MyProjectsPLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
