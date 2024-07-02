import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type MessageType = 'info' | 'warn' | 'error';
type MaterialSymbolsIconName = 'info' | 'warning';

@Component({
  selector: 'app-message-bar-st',
  templateUrl: './message-bar-st.component.html',
  styleUrls: ['./message-bar-st.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarStComponent {
  @Input() showIcon: boolean;

  @Input() set messageType(type: MessageType) {
    this.setPropertiesForMessageType(type);
  }

  iconName: MaterialSymbolsIconName;
  cssClass: string;

  constructor() {
    this.showIcon = false;
    this.messageType = 'info';
    this.iconName = 'info';
    this.cssClass = 'info';
  }

  private setPropertiesForMessageType(messageType: string) {
    switch (messageType) {
      case 'info': {
        this.iconName = 'info';
        this.cssClass = 'info';
        break;
      }
      case 'warn': {
        this.iconName = 'warning';
        this.cssClass = 'warn';
        break;
      }
      case 'error': {
        this.iconName = 'warning';
        this.cssClass = 'error';
        break;
      }
    }
  }
}