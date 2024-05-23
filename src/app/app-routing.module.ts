import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Variante1PaginaNaoEncontradaPage } from './features/pagina-nao-encontrada/components/pages/variante-1-pagina-nao-encontrada-page/variante-1-pagina-nao-encontrada-page.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/modules/login.module').then(module => module.LoginModule) },
  { path: 'home', loadChildren: () => import('./features/pagina-padrao/modules/pagina-padrao.module').then(module => module.PaginaPadraoModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'not-found', component: Variante1PaginaNaoEncontradaPage },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
