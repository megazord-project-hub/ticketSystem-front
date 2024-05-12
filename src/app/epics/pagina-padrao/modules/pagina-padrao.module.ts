import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescricaoUsuarioPaginaPadraoMoleculeComponent } from '../components/molecules/descricao-usuario-pagina-padrao-molecule/descricao-usuario-pagina-padrao-molecule.component';
import { Variante1PaginaPadraoTemplateComponent } from '../components/templates/variante-1-pagina-padrao-template/variante-1-pagina-padrao-template.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DescricaoUsuarioPaginaPadraoMoleculeComponent,
    Variante1PaginaPadraoTemplateComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class PaginaPadraoModule { }
