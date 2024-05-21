import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { iniciarTentativaLogin } from '../../../store/login.actions';
import { AppState } from 'src/app/app.module';

@Component({
  selector: 'app-formulario-login-organism',
  templateUrl: './formulario-login-organism.component.html',
  styleUrls: ['./formulario-login-organism.component.scss']
})
export class FormularioLoginOrganismComponent implements OnInit {

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
    // TODO: iterar entre os campos do formulário e dar foco de maneira automática.
    // Tentei o código:
    // for (let nomeControl in this.myForm.controls) {
    //   if (this.myForm.get(nomeControl)?.invalid) {
    //      fazer focus()
    //   }
    // }
    // Mas, o FormControl não tem referência ao elemento HTML, que é necessário para
    // o focus(). Talvez seria legal criar um helper geral pro App que recebe formGroups e
    // itera pelos seus fields pra dar foco naquele que é inválido.
    if (this.myForm.get('login')?.invalid) {
      this.renderer.selectRootElement('#login').focus();
    } else if (this.myForm.get('password')?.invalid) {
      this.renderer.selectRootElement('#password').focus();
    }
  }

  private sendLoginHttpRequest() {
    this.store.dispatch(iniciarTentativaLogin({
      login: this.myForm.get('login')?.value,
      password: this.myForm.get('password')?.value
    }))   
  }

  updateLoginErrorMessage(): void {
    const erros = this.myForm.get('login')?.errors;
    if (erros?.['required']) {
      this.loginErrorMessage = 'O login é obrigatório.';
    }
  }

  updatePasswordErrorMessage(): void {
    const erros = this.myForm.get('password')?.errors;
    if (erros?.['required']) {
      this.passwordErrorMessage = 'A senha é obrigatória.';
    } else if (erros?.['minlength']) {
      this.passwordErrorMessage = 'Exigido pelo menos 3 caracteres.';
    }
  }

}
