import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BootstrapCoreComponent } from './bootstrap-core.component';

describe('BootstrapCoreComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [BootstrapCoreComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BootstrapCoreComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
