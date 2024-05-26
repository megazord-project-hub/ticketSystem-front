import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagAtomMyProjectsComponent } from '../components/atoms/tag-atom-my-projects/tag-atom-my-projects.component';
import { ProjectManagerMoleculeMyProjectsComponent } from '../components/molecules/project-manager-molecule-my-projects/project-manager-molecule-my-projects.component';
import { ProjectsListPageMyProjectsComponent } from '../components/pages/projects-list-page-my-projects/projects-list-page-my-projects.component';
import { ProjectCardOrganismMyProjectsComponent } from '../components/organisms/project-card-organism-my-projects/project-card-organism-my-projects.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NewProjectButtonAtomMyProjectsComponent } from '../components/atoms/new-project-button-atom-my-projects/new-project-button-atom-my-projects.component';



@NgModule({
  declarations: [
    TagAtomMyProjectsComponent,
    ProjectManagerMoleculeMyProjectsComponent,
    ProjectsListPageMyProjectsComponent,
    ProjectCardOrganismMyProjectsComponent,
    NewProjectButtonAtomMyProjectsComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MyProjectsModule { }
