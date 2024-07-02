import { Component } from '@angular/core';

@Component({
  selector: 'app-shell-user-fm',
  templateUrl: './shell-user-fm.component.html',
  styleUrls: ['./shell-user-fm.component.scss']
})
export class ShellUserFmComponent {
  
  nomeUsuario: string;
  cargoUsuario: string;

  constructor() {
    this.nomeUsuario = "Nome do usuário";
    this.cargoUsuario = "Cargo do usuário";
  }

}
