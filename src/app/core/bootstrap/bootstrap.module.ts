import { NgModule } from '@angular/core';
import { BootstrapComponent } from './components/bootstrap-component/bootstrap.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BootstrapModule { }