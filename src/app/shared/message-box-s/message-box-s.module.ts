import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxSmComponent } from './components/molecules/message-box-sm/message-box-sm.component';

@NgModule({
  declarations: [
    MessageBoxSmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageBoxSmComponent
  ]
})
export class MessageBoxSModule { }