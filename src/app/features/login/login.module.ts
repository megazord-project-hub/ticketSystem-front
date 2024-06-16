import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginOBoxComponent } from './components/organisms/login-o-box/login-o-box.component';
import { LoginOFormComponent } from './components/organisms/login-o-form/login-o-form.component';
import { LoginPLayoutComponent } from './components/pages/login-p-layout/login-p-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginOBoxComponent,
    LoginOFormComponent,
    LoginPLayoutComponent
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
