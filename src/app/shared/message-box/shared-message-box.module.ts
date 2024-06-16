import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedAMessageBoxBasicComponent } from './components/atoms/shared-a-message-box-basic/shared-a-message-box-basic.component';

@NgModule({
  declarations: [
    SharedAMessageBoxBasicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedAMessageBoxBasicComponent
  ]
})
export class SharedMessageBoxModule { }
