import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaNaoEncontradaModule } from './epics/pagina-nao-encontrada/modules/pagina-nao-encontrada.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './epics/login/store/login.effects';
import { LoginState } from './epics/login/store/login.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface AppState {
  login: LoginState,
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    PaginaNaoEncontradaModule,
    AppRoutingModule, // Deverá sempre ser o último módulo com rota importado. Senão, o wildcard '**'
                      // vai ignorar as rotas dos outros módulos.
    EffectsModule.forRoot([LoginEffects]), 
    StoreModule.forRoot({}), 
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
