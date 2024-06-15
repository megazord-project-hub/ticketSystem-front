import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startAuthAttempt } from '../../../../../core/auth/store/state-management/auth.actions';
import { AppState } from '../../../../../core/store/interfaces/app-state';
import { ErrorMessages } from './form-validation-messages/form-validation-messages';
import { AuthRequestBodyModel } from 'src/app/core/auth/models/auth-request-body.model';

@Component({
  selector: 'app-form-organism-login',
  templateUrl: './form-organism-login.component.html',
  styleUrls: ['./form-organism-login.component.scss']
})
export class FormOrganismLoginComponent implements OnInit {
  public myForm!: FormGroup; 
  public passwordErrorMessage: string;
  public loginErrorMessage: string;
  public isPasswordVisible: boolean;
  private store: Store;
  private renderer: Renderer2;

  constructor(renderer: Renderer2, store: Store<AppState>) {
    this.passwordErrorMessage = '';
    this.loginErrorMessage = '';
    this.renderer = renderer;
    this.isPasswordVisible = false;
    this.store = store;
  }

  ngOnInit(): void {
    this.configureForm();
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
}