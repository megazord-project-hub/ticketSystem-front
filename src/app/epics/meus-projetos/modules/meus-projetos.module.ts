import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagMeusProjetosAtomComponent } from '../components/atoms/tag-meus-projetos-atom/tag-meus-projetos-atom.component';
import { GerenteMeusProjetosMoleculeComponent } from '../components/molecules/gerente-meus-projetos-molecule/gerente-meus-projetos-molecule.component';
import { ListagemMeusProjetosPageComponent } from '../components/pages/listagem-meus-projetos-page/listagem-meus-projetos-page.component';
import { CardProjetoMeusProjetosOrganismComponent } from '../components/organisms/card-projeto-meus-projetos-organism/card-projeto-meus-projetos-organism.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TagMeusProjetosAtomComponent,
    GerenteMeusProjetosMoleculeComponent,
    ListagemMeusProjetosPageComponent,
    CardProjetoMeusProjetosOrganismComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MeusProjetosModule { }
