import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTLayoutComponent } from './shell-t-layout.component';

describe('ShellTLayoutComponent', () => {
  let component: ShellTLayoutComponent;
  let fixture: ComponentFixture<ShellTLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellTLayoutComponent]
    });
    fixture = TestBed.createComponent(ShellTLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
