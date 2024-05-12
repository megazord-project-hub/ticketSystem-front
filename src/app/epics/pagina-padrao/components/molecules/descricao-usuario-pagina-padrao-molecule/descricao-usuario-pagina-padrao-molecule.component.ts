import { Component } from '@angular/core';

@Component({
  selector: 'app-descricao-usuario-pagina-padrao-molecule',
  templateUrl: './descricao-usuario-pagina-padrao-molecule.component.html',
  styleUrls: ['./descricao-usuario-pagina-padrao-molecule.component.scss']
})
export class DescricaoUsuarioPaginaPadraoMoleculeComponent {
  
  nomeUsuario: string;
  cargoUsuario: string;

  constructor() {
    this.nomeUsuario = "Nome do usuário";
    this.cargoUsuario = "Cargo do usuário";
  }

}
