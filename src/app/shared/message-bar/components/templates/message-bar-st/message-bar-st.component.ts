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
  cssClasses: string[];

  constructor() {
    this.showIcon = false;
    this.messageType = 'info';
    this.iconName = 'info';
    this.cssClasses = ['info', 'g-border-thickness-xs'];
  }

  private setPropertiesForMessageType(messageType: string): void {
    switch (messageType) {
      case 'info': {
        this.iconName = 'info';
        this.cssClasses = ['info', 'g-border-thickness-xs'];
        break;
      }
      case 'warn': {
        this.iconName = 'warning';
        this.cssClasses = ['warn', 'g-border-thickness-xs'];
        break;
      }
      case 'error': {
        this.iconName = 'warning';
        this.cssClasses = ['error'];
        break;
      }
    }
  }
}