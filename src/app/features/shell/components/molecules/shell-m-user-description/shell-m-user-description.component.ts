import { Component } from '@angular/core';

@Component({
  selector: 'app-shell-m-user-description',
  templateUrl: './shell-m-user-description.component.html',
  styleUrls: ['./shell-m-user-description.component.scss']
})
export class ShellMUserDescriptionComponent {
  
  nomeUsuario: string;
  cargoUsuario: string;

  constructor() {
    this.nomeUsuario = "Nome do usuário";
    this.cargoUsuario = "Cargo do usuário";
  }

}
