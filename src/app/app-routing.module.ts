import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NaoEncontradoPageComponent } from './pages/nao-encontrado-page/nao-encontrado-page.component';
import { UsuarioLogadoTemplateComponent } from './templates/usuario-logado-template/usuario-logado-template.component';
import { MeusProjetosPageComponent } from './pages/meus-projetos-page/meus-projetos-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: UsuarioLogadoTemplateComponent, children: [
      { path: 'projetos', component: MeusProjetosPageComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'nao-encontrado', component: NaoEncontradoPageComponent },
  { path: '**', redirectTo: '/nao-encontrado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
