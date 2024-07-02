import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFpComponent } from './components/pages/login-fp/login-fp.component';

const routes: Routes = [
  { path: '', component: LoginFpComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
