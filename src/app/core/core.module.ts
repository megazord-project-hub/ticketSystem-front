import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { CoreBootstrapComponent } from './components/core-bootstrap/core-bootstrap.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemingModule } from './theming/theming.module';

@NgModule({
  declarations: [
    CoreBootstrapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    ThemingModule
  ]
})
export class CoreModule { }