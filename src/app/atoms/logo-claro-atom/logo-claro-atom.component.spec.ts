import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoClaroAtomComponent } from './logo-claro-atom.component';

describe('LogoClaroAtomComponent', () => {
  let component: LogoClaroAtomComponent;
  let fixture: ComponentFixture<LogoClaroAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoClaroAtomComponent]
    });
    fixture = TestBed.createComponent(LogoClaroAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
