import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/interfaces/app-state';
import { selectThemeState } from '../../../../theming/store/state-management/themes.reducer';
import { ThemeTypes } from '../../../../theming/store/state-management/enums/theme-types.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bootstrap-ct',
  templateUrl: './bootstrap-ct.component.html',
  styleUrls: ['./bootstrap-ct.component.scss']
})
export class BootstrapCtComponent implements OnInit, OnDestroy { 
  isThemeDark: boolean;
  isThemeDarkSubscription$!: Subscription;

  store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.isThemeDark = false;
    this.store = store;
  }

  ngOnInit(): void {
    this.initializeThemeSubscription();
  }

  private initializeThemeSubscription(): void {
    this.isThemeDarkSubscription$ = this.store.select(selectThemeState).subscribe((value) => 
      this.isThemeDark = (value.themeType === ThemeTypes.Dark ? true : false)
    );
  }

  ngOnDestroy(): void {
    this.isThemeDarkSubscription$.unsubscribe();
  }
}
