import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { CoreBootstrapComponent } from './components/core-bootstrap/core-bootstrap.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoreBootstrapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule
  ]
})
export class CoreModule { }