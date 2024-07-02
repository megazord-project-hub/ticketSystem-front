import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsTagFaComponent } from './components/atoms/projects-tag-fa/projects-tag-fa.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ProjectsNewButtonFaComponent } from './components/atoms/projects-new-button-fa/projects-new-button-fa.component';
import { ProjectsNewDialogFmComponent } from './components/molecules/projects-new-dialog-fm/projects-new-dialog-fm.component';
import { ProjectsManagerFmComponent } from './components/molecules/projects-manager-fm/projects-manager-fm.component';
import { ProjectsCardFoComponent } from './components/organisms/projects-card-fo/projects-card-fo.component';
import { ProjectsPageFpComponent } from './components/pages/projects-page-fp/projects-page-fp.component';

@NgModule({
  declarations: [
    ProjectsNewButtonFaComponent,
    ProjectsTagFaComponent,
    ProjectsNewDialogFmComponent,
    ProjectsManagerFmComponent,
    ProjectsCardFoComponent,
    ProjectsPageFpComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButton
  ]
})
export class MyProjectsModule { }
