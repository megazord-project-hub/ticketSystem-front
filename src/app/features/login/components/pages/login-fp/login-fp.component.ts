import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-fp',
  templateUrl: './login-fp.component.html',
  styleUrls: ['./login-fp.component.scss', './login-fp-theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFpComponent {}