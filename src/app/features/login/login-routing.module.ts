import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPLayoutComponent } from './components/pages/login-p-layout/login-p-layout.component';

const routes: Routes = [
  { path: '', component: LoginPLayoutComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
