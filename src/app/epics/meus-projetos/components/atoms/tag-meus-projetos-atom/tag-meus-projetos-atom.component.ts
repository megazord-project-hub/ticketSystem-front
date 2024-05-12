import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-meus-projetos-atom',
  templateUrl: './tag-meus-projetos-atom.component.html',
  styleUrls: ['./tag-meus-projetos-atom.component.scss']
})
export class TagMeusProjetosAtomComponent {

  @Input() descricao!: string;
  @Input() corFundo!: string;
  @Input() corTexto!: string;

}
