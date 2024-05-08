import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarNomeUsuarioAtomComponent } from './avatar-nome-usuario-atom.component';

describe('AvatarNomeUsuarioAtomComponent', () => {
  let component: AvatarNomeUsuarioAtomComponent;
  let fixture: ComponentFixture<AvatarNomeUsuarioAtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarNomeUsuarioAtomComponent]
    });
    fixture = TestBed.createComponent(AvatarNomeUsuarioAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
