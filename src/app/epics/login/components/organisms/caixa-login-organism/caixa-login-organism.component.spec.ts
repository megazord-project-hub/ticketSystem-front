import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaLoginOrganismComponent } from './caixa-login-organism.component';

describe('CaixaLoginOrganismComponent', () => {
  let component: CaixaLoginOrganismComponent;
  let fixture: ComponentFixture<CaixaLoginOrganismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaixaLoginOrganismComponent]
    });
    fixture = TestBed.createComponent(CaixaLoginOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
