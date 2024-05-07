import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-molecule',
  templateUrl: './login-molecule.component.html',
  styleUrls: ['./login-molecule.component.scss']
})
export class LoginMoleculeComponent implements OnInit {

  @ViewChild('login') elementoLogin!: ElementRef;

  meuForm!: FormGroup; 
  mensagemErroSenha: string;
  mensagemErroLogin: string;
  renderer: Renderer2;

  constructor(renderer: Renderer2) {
    this.mensagemErroSenha = '';
    this.mensagemErroLogin = '';
    this.renderer = renderer;
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
      console.log(this.mensagemErroSenha);
    }
  }

  atualizarMensagemErroSenha(): void {
    const erros = this.meuForm.get('senha')?.errors;
    if (erros?.['required']) {
      this.mensagemErroSenha = 'A senha é obrigatória.';
      console.log(this.mensagemErroSenha);
    } else if (erros?.['minlength']) {
      this.mensagemErroSenha = 'Exigido pelo menos 3 caracteres.';
    }
  }

}
