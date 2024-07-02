import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellUserFmComponent } from './components/molecules/shell-user-fm/shell-user-fm.component';
import { ShellTemplateFtComponent } from './components/templates/shell-template-ft/shell-template-ft.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginaPadraoRoutingModule } from './shell-routing.module';
import { MyProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [
    ShellUserFmComponent,
    ShellTemplateFtComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    PaginaPadraoRoutingModule,
    MyProjectsModule
  ]
})
export class ShellModule { }