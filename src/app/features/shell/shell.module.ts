import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellMUserDescriptionComponent } from './components/molecules/shell-m-user-description/shell-m-user-description.component';
import { ShellTLayoutComponent } from './components/templates/shell-t-layout/shell-t-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PaginaPadraoRoutingModule } from './shell-routing.module';
import { MyProjectsModule } from '../my-projects/my-projects.module';

@NgModule({
  declarations: [
    ShellMUserDescriptionComponent,
    ShellTLayoutComponent
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