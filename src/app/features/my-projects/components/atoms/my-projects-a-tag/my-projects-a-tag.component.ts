import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-projects-a-tag',
  templateUrl: './my-projects-a-tag.component.html',
  styleUrls: ['./my-projects-a-tag.component.scss']
})
export class MyProjectsATagComponent {

  @Input() isAtivo: boolean;

  constructor() {
    this.isAtivo = false;
  }

}
