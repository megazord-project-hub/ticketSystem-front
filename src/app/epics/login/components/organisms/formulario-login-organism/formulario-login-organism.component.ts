import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { iniciarTentativaLogin } from '../../../store/login.actions';
import { Observable } from 'rxjs';
import { selectLogin } from '../../../store/login.selector';
import { AppState } from 'src/app/app.module';
import { LoginState } from '../../../store/login.reducer';

@Component({
  selector: 'app-formulario-login-organism',
  templateUrl: './formulario-login-organism.component.html',
  styleUrls: ['./formulario-login-organism.component.scss']
})
export class FormularioLoginOrganismComponent implements OnInit {
  
  @ViewChild('login') elementoLogin!: ElementRef;

  meuForm!: FormGroup; 
  mensagemErroSenha: string;
  mensagemErroLogin: string;
  renderer: Renderer2;
  senhaVisivel: boolean;
  store: Store;
  teste: string = '';

  constructor(renderer: Renderer2, store: Store<AppState>) {
    this.mensagemErroSenha = '';
    this.mensagemErroLogin = '';
    this.renderer = renderer;
    this.senhaVisivel = false;
    this.store = store;
  }

  ngOnInit(): void {
    this.meuForm = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'senha': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit(): void {
    this.atualizarMensagensErros();
    if (this.meuForm.invalid) {
      this.focarNoCampoInvalido();
      return;
    }  

    this.store.dispatch(iniciarTentativaLogin({
      login: this.meuForm.get('login')?.value,
      senha: this.meuForm.get('senha')?.value
    }))    
  }

  focarNoCampoInvalido() {
    // TODO: iterar entre os campos do formulário e dar foco de maneira automática.
    // Tentei o código:
    // for (let nomeControl in this.meuForm.controls) {
    //   if (this.meuForm.get(nomeControl)?.invalid) {
    //      fazer focus()
    //   }
    // }
    // Mas, o FormControl não tem referência ao elemento HTML, que é necessário para
    // o focus(). 
    if (this.meuForm.get('login')?.invalid) {
      this.renderer.selectRootElement('#login').focus();
    } else if (this.meuForm.get('senha')?.invalid) {
      this.renderer.selectRootElement('#senha').focus();
    }
  }

  atualizarMensagensErros(): void {
    this.atualizarMensagemErroLogin();
    this.atualizarMensagemErroSenha();
  }

  atualizarMensagemErroLogin(): void {
    const erros = this.meuForm.get('login')?.errors;
    if (erros?.['required']) {
      this.mensagemErroLogin = 'O login é obrigatório.';
    }
  }

  atualizarMensagemErroSenha(): void {
    const erros = this.meuForm.get('senha')?.errors;
    if (erros?.['required']) {
      this.mensagemErroSenha = 'A senha é obrigatória.';
    } else if (erros?.['minlength']) {
      this.mensagemErroSenha = 'Exigido pelo menos 3 caracteres.';
    }
  }

}
