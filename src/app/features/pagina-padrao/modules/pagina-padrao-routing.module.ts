import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Variante1PaginaPadraoTemplateComponent } from '../components/templates/variante-1-pagina-padrao-template/variante-1-pagina-padrao-template.component';
import { ProjectsListPageMyProjectsComponent } from '../../my-projects/components/pages/projects-list-page-my-projects/projects-list-page-my-projects.component';


const routes: Routes = [
    { path: '', component: Variante1PaginaPadraoTemplateComponent, children: [
        { path: 'projetos', component: ProjectsListPageMyProjectsComponent }
    ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPadraoRoutingModule { }
