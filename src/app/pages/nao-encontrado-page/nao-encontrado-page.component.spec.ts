import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontradoPageComponent } from './nao-encontrado-page.component';

describe('NaoEncontradoPageComponent', () => {
  let component: NaoEncontradoPageComponent;
  let fixture: ComponentFixture<NaoEncontradoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoEncontradoPageComponent]
    });
    fixture = TestBed.createComponent(NaoEncontradoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
