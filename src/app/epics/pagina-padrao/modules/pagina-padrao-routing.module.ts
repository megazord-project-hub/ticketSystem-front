import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Variante1PaginaPadraoTemplateComponent } from '../components/templates/variante-1-pagina-padrao-template/variante-1-pagina-padrao-template.component';
import { ListagemMeusProjetosPageComponent } from '../../meus-projetos/components/pages/listagem-meus-projetos-page/listagem-meus-projetos-page.component';


const routes: Routes = [
    { path: '', component: Variante1PaginaPadraoTemplateComponent, children: [
        { path: 'projetos', component: ListagemMeusProjetosPageComponent }
    ]},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPadraoRoutingModule { }
