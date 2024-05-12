import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoLoginPageComponent } from './epics/login/components/pages/autenticacao-login-page/autenticacao-login-page.component';
import { Variante1PaginaNaoEncontradaPage } from './epics/pagina-nao-encontrada/components/pages/variante-1-pagina-nao-encontrada-page/variante-1-pagina-nao-encontrada-page.component';
import { Variante1PaginaPadraoTemplateComponent } from './epics/pagina-padrao/components/templates/variante-1-pagina-padrao-template/variante-1-pagina-padrao-template.component';
import { ListagemMeusProjetosPageComponent } from './epics/meus-projetos/components/pages/listagem-meus-projetos-page/listagem-meus-projetos-page.component';

const routes: Routes = [
  { path: 'login', component: AutenticacaoLoginPageComponent },
  { path: 'home', component: Variante1PaginaPadraoTemplateComponent, children: [
      { path: 'projetos', component: ListagemMeusProjetosPageComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'nao-encontrado', component: Variante1PaginaNaoEncontradaPage },
  { path: '**', redirectTo: '/nao-encontrado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
