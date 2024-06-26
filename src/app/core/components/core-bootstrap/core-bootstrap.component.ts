import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/interfaces/app-state';
import { selectThemeState } from '../../theming/store/state-management/themes.reducer';
import { ThemeTypes } from '../../theming/store/state-management/enums/theme-types.enum';

@Component({
  selector: 'app-core-bootstrap',
  templateUrl: './core-bootstrap.component.html',
  styleUrls: ['./core-bootstrap.component.scss']
})
export class CoreBootstrapComponent implements OnInit { 
  isThemeDark: boolean;
  store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.isThemeDark = false;
    this.store = store;
  }

  ngOnInit(): void {
    this.initializeThemeSubscription();
  }

  private initializeThemeSubscription(): void {
    this.store.select(selectThemeState).subscribe((value) => 
      this.isThemeDark = (value.themeType === ThemeTypes.Dark ? true : false)
    );
  }
}
