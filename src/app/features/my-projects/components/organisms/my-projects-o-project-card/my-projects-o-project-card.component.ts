import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-projects-o-project-card',
  templateUrl: './my-projects-o-project-card.component.html',
  styleUrls: ['./my-projects-o-project-card.component.scss']
})
export class MyProjectsOProjectCardComponent {

  @Input() isProjetoAtivo: boolean;

  constructor() {
    this.isProjetoAtivo = false;
  }

}
