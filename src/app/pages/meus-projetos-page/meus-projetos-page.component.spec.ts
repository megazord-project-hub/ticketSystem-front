import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusProjetosPageComponent } from './meus-projetos-page.component';

describe('MeusProjetosPageComponent', () => {
  let component: MeusProjetosPageComponent;
  let fixture: ComponentFixture<MeusProjetosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusProjetosPageComponent]
    });
    fixture = TestBed.createComponent(MeusProjetosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
