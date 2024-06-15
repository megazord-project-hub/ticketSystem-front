import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/bootstrap/components/app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaNaoEncontradaModule } from './features/pagina-nao-encontrada/modules/pagina-nao-encontrada.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './core/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    PaginaNaoEncontradaModule,
    // AppRoutingModule should always be the last module imported into
    // this array, relative to other modules that define routes. Otherwise,
    // the wildcard path (**) will ignore their route paths.
    AppRoutingModule,
    AuthModule,
    EffectsModule.forRoot([]), 
    StoreModule.forRoot({}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
