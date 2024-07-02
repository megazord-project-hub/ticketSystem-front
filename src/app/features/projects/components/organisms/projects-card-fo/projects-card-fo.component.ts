import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-card-fo',
  templateUrl: './projects-card-fo.component.html',
  styleUrls: ['./projects-card-fo.component.scss']
})
export class ProjectsCardFoComponent {

  @Input() isProjetoAtivo: boolean;

  constructor() {
    this.isProjetoAtivo = false;
  }

}
