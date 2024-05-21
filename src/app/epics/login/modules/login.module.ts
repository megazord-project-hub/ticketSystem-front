import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxOrganismLoginComponent } from '../components/organisms/box-organism-login/box-organism-login.component';
import { FormOrganismLoginComponent } from '../components/organisms/form-organism-login/form-organism-login.component';
import { AutenticacaoLoginPageComponent } from '../components/pages/autenticacao-login-page/autenticacao-login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';
// import { LoginStoreModule } from './login-store-module';
// import { LoginEffectsModule } from './login-effects-module';

@NgModule({
  declarations: [
    BoxOrganismLoginComponent,
    FormOrganismLoginComponent,
    AutenticacaoLoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    LoginRoutingModule,
    // LoginStoreModule,
    // LoginEffectsModule
  ]
})
export class LoginModule { }
