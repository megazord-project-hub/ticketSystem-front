import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-atom-my-projects',
  templateUrl: './tag-atom-my-projects.component.html',
  styleUrls: ['./tag-atom-my-projects.component.scss']
})
export class TagAtomMyProjectsComponent {

  @Input() isAtivo: boolean;

  constructor() {
    this.isAtivo = false;
  }

}
