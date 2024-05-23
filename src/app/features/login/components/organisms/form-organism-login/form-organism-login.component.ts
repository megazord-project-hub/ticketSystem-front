import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { startLoginAttempt } from '../../../store/login.actions';
import { AppState } from 'src/app/app.module';
import { ErrorMessages } from './form-validation-messages/form-validation-messages';

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
    // TODO: iterate through each form field and focus on any invalid ones.
    // I tried the following code:
    // for (let nomeControl in this.myForm.controls) {
    //   if (this.myForm.get(nomeControl)?.invalid) {
    //      fazer focus()
    //   }
    // }
    // But FormControl doesn't reference the HTML element, which is necessary for
    // focusing. 
    if (this.myForm.get('login')?.invalid) {
      this.renderer.selectRootElement('#login').focus();
    } else if (this.myForm.get('password')?.invalid) {
      this.renderer.selectRootElement('#password').focus();
    }
  }

  private sendLoginHttpRequest() {
    this.store.dispatch(startLoginAttempt({
      username: this.myForm.get('login')?.value,
      password: this.myForm.get('password')?.value
    }))   
  }

  updateLoginErrorMessage(): void {
    const errors = this.myForm.get('login')?.errors;
    if (errors?.['required']) {
      this.loginErrorMessage = ErrorMessages.login.required;
    }
  }

  updatePasswordErrorMessage(): void {
    const errors = this.myForm.get('password')?.errors;
    if (errors?.['required']) {
      this.passwordErrorMessage = ErrorMessages.password.required;
    } else if (errors?.['minlength']) {
      this.passwordErrorMessage = ErrorMessages.password.minLength;
    }
  }

}