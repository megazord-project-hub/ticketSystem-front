import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-sa',
  templateUrl: './logo-sa.component.html',
  styleUrls: ['./logo-sa.component.scss', './logo-sa-theme.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoSaComponent {
  @Input() desiredWidth: number;
  @Input() desiredHeight: number;

  constructor() {
    this.desiredHeight = 0;
    this.desiredWidth = 0;
  }
}