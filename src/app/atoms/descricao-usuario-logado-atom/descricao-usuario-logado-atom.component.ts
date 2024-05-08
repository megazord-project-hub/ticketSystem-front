import { Component } from '@angular/core';

@Component({
  selector: 'app-descricao-usuario-logado-atom',
  templateUrl: './descricao-usuario-logado-atom.component.html',
  styleUrls: ['./descricao-usuario-logado-atom.component.scss']
})
export class DescricaoUsuarioLogadoAtomComponent {
  
  nomeUsuario: string;
  cargoUsuario: string;

  constructor() {
    this.nomeUsuario = "Nome do usuário";
    this.cargoUsuario = "Cargo do usuário";
  }

}
