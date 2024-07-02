import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/interfaces/app-state';
import { ThemeTypes } from 'src/app/core/theming/store/state-management/enums/theme-types.enum';
import { ThemeState } from 'src/app/core/theming/store/state-management/interfaces/theme-state';
import { changeTheme } from 'src/app/core/theming/store/state-management/themes.actions';
import { selectThemeState } from 'src/app/core/theming/store/state-management/themes.reducer';

@Component({
  selector: 'app-login-box-fo',
  templateUrl: './login-box-fo.component.html',
  styleUrls: ['./login-box-fo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginBoxFoComponent implements OnInit {
  isCurrentThemeLight: boolean;

  constructor(private store: Store<AppState>) {
    this.isCurrentThemeLight = true;
  }

  ngOnInit(): void {
    this.store.select(selectThemeState).subscribe((value) => 
      this.isCurrentThemeLight = (value.themeType === ThemeTypes.Light ? true : false)
    );
  }

  onToggleTheme(): void {
    const newTheme: ThemeState = {
      themeType: this.isCurrentThemeLight ? ThemeTypes.Dark : ThemeTypes.Light
    };
    this.store.dispatch(changeTheme(newTheme));
  }

  teste() {
    
  }
}