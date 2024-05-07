import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-molecule',
  templateUrl: './login-molecule.component.html',
  styleUrls: ['./login-molecule.component.scss']
})
export class LoginMoleculeComponent implements OnInit {
  
  meuForm!: FormGroup; 
  mensagemErroSenha: string;
  mensagemErroLogin: string;

  constructor() {
    this.mensagemErroSenha = '';
    this.mensagemErroLogin = '';
  }

  ngOnInit(): void {
    this.meuForm = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'senha': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit(): void {
    console.log(this.meuForm);    
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
