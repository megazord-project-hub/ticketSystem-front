import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type MessageType = 'info' | 'warn' | 'error';
type IconName = 'info' | 'warning';

@Component({
  selector: 'app-message-bar-st',
  templateUrl: './message-bar-st.component.html',
  styleUrls: ['./message-bar-st.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBarStComponent {
  @Input() showIcon: boolean;
  @Input() set messageType(type: MessageType) {
    if (this.messageType === 'info') {
      this.iconName = 'info'
    } else {
      this.iconName = 'warning';
    }
  }

  iconName: IconName;

  classe: string = 'info';

  constructor() {
    this.showIcon = false;
    this.messageType = 'info';
    this.iconName = 'info';
  }
}