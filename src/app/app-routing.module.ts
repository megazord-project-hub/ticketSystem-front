import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Variante1PaginaNaoEncontradaPage } from './epics/pagina-nao-encontrada/components/pages/variante-1-pagina-nao-encontrada-page/variante-1-pagina-nao-encontrada-page.component';



const routes: Routes = [
  { path: 'login', loadChildren: () => import('./epics/login/modules/login.module').then(module => module.LoginModule) },
  { path: 'home', loadChildren: () => import('./epics/pagina-padrao/modules/pagina-padrao.module').then(module => module.PaginaPadraoModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'nao-encontrado', component: Variante1PaginaNaoEncontradaPage },
  { path: '**', redirectTo: '/nao-encontrado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
