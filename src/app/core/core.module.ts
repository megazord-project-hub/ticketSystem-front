import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { BootstrapCtComponent } from './bootstrap/components/templates/bootstrap-ct/bootstrap-ct.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemingModule } from './theming/theming.module';

@NgModule({
  declarations: [
    BootstrapCtComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    ThemingModule
  ]
})
export class CoreModule { }