import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card-organism-my-projects',
  templateUrl: './project-card-organism-my-projects.component.html',
  styleUrls: ['./project-card-organism-my-projects.component.scss']
})
export class ProjectCardOrganismMyProjectsComponent {

  @Input() isProjetoAtivo: boolean;

  constructor() {
    this.isProjetoAtivo = false;
  }

}
