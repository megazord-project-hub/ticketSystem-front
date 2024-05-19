import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaLoginOrganismComponent } from '../components/organisms/caixa-login-organism/caixa-login-organism.component';
import { FormularioLoginOrganismComponent } from '../components/organisms/formulario-login-organism/formulario-login-organism.component';
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
    CaixaLoginOrganismComponent,
    FormularioLoginOrganismComponent,
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
