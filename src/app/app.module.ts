import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { CaixaLoginOrganismComponent } from './epics/login/components/organisms/caixa-login-organism/caixa-login-organism.component';
import { FormularioLoginOrganismComponent } from './epics/login/components/organisms/formulario-login-organism/formulario-login-organism.component';
import { AutenticacaoLoginPageComponent } from './epics/login/components/pages/autenticacao-login-page/autenticacao-login-page.component';
import { TagMeusProjetosAtomComponent } from './epics/meus-projetos/components/atoms/tag-meus-projetos-atom/tag-meus-projetos-atom.component';
import { GerenteMeusProjetosMoleculeComponent } from './epics/meus-projetos/components/molecules/gerente-meus-projetos-molecule/gerente-meus-projetos-molecule.component';
import { ListagemMeusProjetosPageComponent } from './epics/meus-projetos/components/pages/listagem-meus-projetos-page/listagem-meus-projetos-page.component';
import { CardProjetoMeusProjetosOrganismComponent } from './epics/meus-projetos/components/organisms/card-projeto-meus-projetos-organism/card-projeto-meus-projetos-organism.component';
import { EmptyStatePaginaNaoEncontradaMolecule } from './epics/pagina-nao-encontrada/components/molecules/empty-state-pagina-nao-encontrada-molecule/empty-state-pagina-nao-encontrada-molecule.component';
import { Variante1PaginaNaoEncontradaPage } from './epics/pagina-nao-encontrada/components/pages/variante-1-pagina-nao-encontrada-page/variante-1-pagina-nao-encontrada-page.component';
import { Variante1PaginaPadraoTemplateComponent } from './epics/pagina-padrao/components/templates/variante-1-pagina-padrao-template/variante-1-pagina-padrao-template.component';
import { DescricaoUsuarioPaginaPadraoMoleculeComponent } from './epics/pagina-padrao/components/molecules/descricao-usuario-pagina-padrao-molecule/descricao-usuario-pagina-padrao-molecule.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixaLoginOrganismComponent,
    FormularioLoginOrganismComponent,
    AutenticacaoLoginPageComponent,
    TagMeusProjetosAtomComponent,
    GerenteMeusProjetosMoleculeComponent,
    ListagemMeusProjetosPageComponent,
    CardProjetoMeusProjetosOrganismComponent,
    EmptyStatePaginaNaoEncontradaMolecule,
    Variante1PaginaNaoEncontradaPage,
    Variante1PaginaPadraoTemplateComponent,
    DescricaoUsuarioPaginaPadraoMoleculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatButtonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRippleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
