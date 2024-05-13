import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoLoginPageComponent } from '../components/pages/autenticacao-login-page/autenticacao-login-page.component';



const routes: Routes = [
  { path: '', component: AutenticacaoLoginPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
