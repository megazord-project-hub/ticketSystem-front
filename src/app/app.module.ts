import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaNaoEncontradaModule } from './epics/pagina-nao-encontrada/modules/pagina-nao-encontrada.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PaginaNaoEncontradaModule,
    AppRoutingModule  // Deverá sempre ser o último módulo importado. Senão, o wildcard '**'
                      // vai ignorar as rotas dos outros módulos.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
