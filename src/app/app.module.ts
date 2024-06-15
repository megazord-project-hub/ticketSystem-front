import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapCoreComponent } from './core/bootstrap/components/bootstrap-core/bootstrap-core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaNaoEncontradaModule } from './features/pagina-nao-encontrada/modules/pagina-nao-encontrada.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    PaginaNaoEncontradaModule,
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
  bootstrap: [BootstrapCoreComponent]
})
export class AppModule { }
