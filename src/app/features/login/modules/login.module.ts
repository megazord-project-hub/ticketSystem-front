import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxOrganismLoginComponent } from '../components/organisms/box-organism-login/box-organism-login.component';
import { FormOrganismLoginComponent } from '../components/organisms/form-organism-login/form-organism-login.component';
import { AuthPageLoginComponent } from '../components/pages/auth-page-login/auth-page-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    BoxOrganismLoginComponent,
    FormOrganismLoginComponent,
    AuthPageLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
