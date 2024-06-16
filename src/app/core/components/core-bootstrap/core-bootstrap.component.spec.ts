import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreBootstrapComponent } from './core-bootstrap.component';

describe('CoreBootstrapComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [CoreBootstrapComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoreBootstrapComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
