import { NgModule } from '@angular/core';
import { BootstrapCoreComponent } from './components/bootstrap-core/bootstrap-core.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BootstrapCoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BootstrapModule { }