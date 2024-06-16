import { Component, Input, OnInit } from '@angular/core';

export enum MessageType { 
  Error = 'error',
  Warn = 'warn',
  Info = 'info',
  Success = 'success'
}

@Component({
  selector: 'app-shared-a-message-box-basic',
  templateUrl: './shared-a-message-box-basic.component.html',
  styleUrls: ['./shared-a-message-box-basic.component.scss']
})
export class SharedAMessageBoxBasicComponent implements OnInit {
  @Input() messageType: MessageType;

  constructor() {
    this.messageType = MessageType.Info;
  }

  ngOnInit(): void {
      
  }
}
