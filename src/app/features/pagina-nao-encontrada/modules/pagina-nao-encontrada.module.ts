import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStatePaginaNaoEncontradaMolecule } from '../components/molecules/empty-state-pagina-nao-encontrada-molecule/empty-state-pagina-nao-encontrada-molecule.component';
import { Variante1PaginaNaoEncontradaPage } from '../components/pages/variante-1-pagina-nao-encontrada-page/variante-1-pagina-nao-encontrada-page.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmptyStatePaginaNaoEncontradaMolecule,
    Variante1PaginaNaoEncontradaPage
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ]
})
export class PaginaNaoEncontradaModule { }
