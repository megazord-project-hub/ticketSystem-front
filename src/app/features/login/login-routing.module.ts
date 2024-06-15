import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageLoginComponent } from './components/pages/auth-page-login/auth-page-login.component';

const routes: Routes = [
  { path: '', component: AuthPageLoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
