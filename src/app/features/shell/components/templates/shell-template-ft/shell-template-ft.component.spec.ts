import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellTemplateFtComponent } from './shell-template-ft.component';

describe('ShellTemplateFtComponent', () => {
  let component: ShellTemplateFtComponent;
  let fixture: ComponentFixture<ShellTemplateFtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellTemplateFtComponent]
    });
    fixture = TestBed.createComponent(ShellTemplateFtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
