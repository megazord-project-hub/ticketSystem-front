import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellUserFmComponent } from './shell-user-fm.component';

describe('ShellUserFmComponent', () => {
  let component: ShellUserFmComponent;
  let fixture: ComponentFixture<ShellUserFmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellUserFmComponent]
    });
    fixture = TestBed.createComponent(ShellUserFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
