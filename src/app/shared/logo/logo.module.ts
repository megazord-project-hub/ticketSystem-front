import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoSaComponent } from './components/atoms/logo-sa/logo-sa.component';

@NgModule({
  declarations: [
    LogoSaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoSaComponent
  ]
})
export class LogoModule { }