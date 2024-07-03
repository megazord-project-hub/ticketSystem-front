import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startAuthAttempt } from '../../../../../core/auth/store/state-management/auth.actions';
import { AppState } from '../../../../../core/store/interfaces/app-state';
import { ErrorMessages } from './form-validation-messages/form-validation-messages';
import { AuthRequestBodyModel } from 'src/app/core/auth/models/auth-request-body.model';
import { selectErrorClassName, selectIsLoading } from 'src/app/core/auth/store/state-management/auth.reducer';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form-fo',
  templateUrl: './login-form-fo.component.html',
  styleUrls: ['./login-form-fo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormFoComponent implements OnInit, OnDestroy {
  passwordErrorMessage: string;
  loginErrorMessage: string;
  isPasswordVisible: boolean;
  hasAuthFailed: boolean;
  hasAuthFailedSubscription$!: Subscription;
  myForm!: FormGroup; 
  isAuthenticationLoading$!: Observable<boolean>;

  constructor(private renderer: Renderer2, private store: Store<AppState>) {
    this.passwordErrorMessage = '';
    this.loginErrorMessage = '';
    this.isPasswordVisible = false;
    this.hasAuthFailed = false;
  }

  ngOnInit(): void {
    this.configureForm();
    this.isAuthenticationLoading$ = this.store.select(selectIsLoading); 
    this.hasAuthFailedSubscription$ = 
      this.store
        .select(selectErrorClassName)
        .subscribe(errorClassName => (errorClassName === null) ? this.hasAuthFailed = false : this.hasAuthFailed = true);
  }

  private configureForm(): void {
    this.myForm = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit(): void {
    this.updateErrorMessages();

    if (this.myForm.invalid) {
      this.focusOnInvalidField();
      return;
    }  

    this.sendLoginHttpRequest(); 
  }

  private updateErrorMessages(): void {
    this.updateLoginErrorMessage();
    this.updatePasswordErrorMessage();
  }

  private focusOnInvalidField() {
    if (this.myForm.controls['login'].invalid) {
      this.renderer.selectRootElement('#login').focus();
    } else if (this.myForm.controls['password'].invalid) {
      this.renderer.selectRootElement('#password').focus();
    }
  }

  private sendLoginHttpRequest() {
    const authRequestBody = new AuthRequestBodyModel(
      this.myForm.controls['login'].value,
      this.myForm.controls['password'].value
    );
    
    this.store.dispatch(startAuthAttempt(authRequestBody));
  }

  updateLoginErrorMessage(): void {
    const loginControl = this.myForm.controls['login'];

    if (!loginControl.errors) {
      this.loginErrorMessage = '';
    } else if (loginControl.errors['required']) {
      this.loginErrorMessage = ErrorMessages.login.required;
    }
  }

  updatePasswordErrorMessage(): void {
    const passwordControl = this.myForm.controls['password'];

    if (!passwordControl.errors) {
      this.passwordErrorMessage = '';
    } else if (passwordControl.errors['required']) {
      this.passwordErrorMessage = ErrorMessages.password.required;
    } else if (passwordControl.errors['minlength']) {
      this.passwordErrorMessage = ErrorMessages.password.minLength;
    }
  }

  ngOnDestroy(): void {
      this.hasAuthFailedSubscription$.unsubscribe();
  }
}