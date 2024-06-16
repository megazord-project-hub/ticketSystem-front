import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedAMessageBoxBasicComponent } from './shared-a-message-box-basic.component';

describe('SharedAMessageBoxBasicComponent', () => {
  let component: SharedAMessageBoxBasicComponent;
  let fixture: ComponentFixture<SharedAMessageBoxBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedAMessageBoxBasicComponent]
    });
    fixture = TestBed.createComponent(SharedAMessageBoxBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
