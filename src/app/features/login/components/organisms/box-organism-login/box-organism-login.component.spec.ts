import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOrganismLoginComponent } from './box-organism-login.component';

describe('BoxOrganismLoginComponent', () => {
  let component: BoxOrganismLoginComponent;
  let fixture: ComponentFixture<BoxOrganismLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxOrganismLoginComponent]
    });
    fixture = TestBed.createComponent(BoxOrganismLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
