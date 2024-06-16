import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellTLayoutComponent } from './components/templates/shell-t-layout/shell-t-layout.component';
import { MyProjectsPLayoutComponent } from '../my-projects/components/pages/my-projects-p-layout/my-projects-p-layout.component';

const routes: Routes = [
  { path: '', component: ShellTLayoutComponent, children: [
    { path: '', redirectTo: 'projetos', pathMatch: 'full' },
    { path: 'projetos', component: MyProjectsPLayoutComponent }
  ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPadraoRoutingModule { }