import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-tag-fa',
  templateUrl: './projects-tag-fa.component.html',
  styleUrls: ['./projects-tag-fa.component.scss']
})
export class ProjectsTagFaComponent {

  @Input() isAtivo: boolean;

  constructor() {
    this.isAtivo = false;
  }

}
