import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellTemplateFtComponent } from './components/templates/shell-template-ft/shell-template-ft.component';
import { ProjectsPageFpComponent } from '../projects/components/pages/projects-page-fp/projects-page-fp.component';

const routes: Routes = [
  { path: '', component: ShellTemplateFtComponent, children: [
    { path: '', redirectTo: 'projetos', pathMatch: 'full' },
    { path: 'projetos', component: ProjectsPageFpComponent }
  ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPadraoRoutingModule { }