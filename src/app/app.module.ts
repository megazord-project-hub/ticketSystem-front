import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { NaoEncontradoPageComponent } from './pages/nao-encontrado-page/nao-encontrado-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginMoleculeComponent } from './molecules/login-molecule/login-molecule.component';
import { LogoClaroAtomComponent } from './atoms/logo-claro-atom/logo-claro-atom.component';
import { NaoEncontradoMoleculeComponent } from './molecules/nao-encontrado-molecule/nao-encontrado-molecule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NaoEncontradoPageComponent,
    LoginMoleculeComponent,
    LogoClaroAtomComponent,
    NaoEncontradoMoleculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
