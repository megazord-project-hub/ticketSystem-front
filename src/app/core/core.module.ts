import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    BootstrapModule
  ]
})
export class CoreModule { }