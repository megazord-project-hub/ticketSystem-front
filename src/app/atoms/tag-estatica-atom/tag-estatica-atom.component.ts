import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-estatica-atom',
  templateUrl: './tag-estatica-atom.component.html',
  styleUrls: ['./tag-estatica-atom.component.scss']
})
export class TagEstaticaAtomComponent {

  @Input() descricao!: string;
  @Input() corFundo!: string;
  @Input() corTexto!: string;

}
