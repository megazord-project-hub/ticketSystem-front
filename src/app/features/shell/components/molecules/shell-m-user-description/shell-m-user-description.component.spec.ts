import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMUserDescriptionComponent } from './shell-m-user-description.component';

describe('ShellMUserDescriptionComponent', () => {
  let component: ShellMUserDescriptionComponent;
  let fixture: ComponentFixture<ShellMUserDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellMUserDescriptionComponent]
    });
    fixture = TestBed.createComponent(ShellMUserDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
