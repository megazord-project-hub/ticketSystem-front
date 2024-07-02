import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBarStComponent } from './components/templates/message-bar-st/message-bar-st.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MessageBarStComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    MessageBarStComponent
  ]
})
export class MessageBarModule { }