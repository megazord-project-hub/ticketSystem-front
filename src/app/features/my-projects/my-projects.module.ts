import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsATagComponent } from './components/atoms/my-projects-a-tag/my-projects-a-tag.component';
import { MyProjectsMProjectManagerComponent } from './components/molecules/my-projects-m-project-manager/my-projects-m-project-manager.component';
import { MyProjectsPLayoutComponent } from './components/pages/my-projects-p-layout/my-projects-p-layout.component';
import { MyProjectsOProjectCardComponent } from './components/organisms/my-projects-o-project-card/my-projects-o-project-card.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MyProjectsANewProjectButtonComponent } from './components/atoms/my-projects-a-new-project-button/my-projects-a-new-project-button.component';

@NgModule({
  declarations: [
    MyProjectsATagComponent,
    MyProjectsMProjectManagerComponent,
    MyProjectsPLayoutComponent,
    MyProjectsOProjectCardComponent,
    MyProjectsANewProjectButtonComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MyProjectsModule { }
