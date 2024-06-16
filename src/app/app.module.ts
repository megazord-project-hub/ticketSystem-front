import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/core.module';
import { CoreBootstrapComponent } from './core/components/core-bootstrap/core-bootstrap.component';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule should always be the last module imported into
    // this array, relative to other modules that define routes. Otherwise,
    // the wildcard path (**) will ignore their route paths.
    AppRoutingModule,
    CoreModule,
    EffectsModule.forRoot([]), 
    StoreModule.forRoot({}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })  
  ],
  providers: [],
  bootstrap: [CoreBootstrapComponent]
})
export class AppModule { }
