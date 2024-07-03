import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxFoComponent } from './components/organisms/login-box-fo/login-box-fo.component';
import { LoginFormFoComponent } from './components/organisms/login-form-fo/login-form-fo.component';
import { LoginFpComponent } from './components/pages/login-fp/login-fp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MessageBarModule } from 'src/app/shared/message-bar/message-bar.module';
import { LogoModule } from 'src/app/shared/logo/logo.module';


@NgModule({
  declarations: [
    LoginBoxFoComponent,
    LoginFormFoComponent,
    LoginFpComponent
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
    MatProgressSpinnerModule,
    MatTooltipModule,
    MessageBarModule,
    LogoModule
  ]
})
export class LoginModule { }
