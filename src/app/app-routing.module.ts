import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NaoEncontradoPageComponent } from './pages/nao-encontrado-page/nao-encontrado-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'nao-encontrado', component: NaoEncontradoPageComponent },
  { path: '**', redirectTo: '/nao-encontrado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
