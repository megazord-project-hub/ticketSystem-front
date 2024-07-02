import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BootstrapCtComponent } from '../../../../components/bootstrap-ct/bootstrap-ct.component';

describe('BootstrapCtComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [BootstrapCtComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BootstrapCtComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
