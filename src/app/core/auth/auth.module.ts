import { NgModule } from '@angular/core';
import { AuthEffectsModule } from './store/auth-effects-module';
import { AuthStoreModule } from './store/auth-store-module';

@NgModule({
  declarations: [],
  imports: [
    AuthStoreModule,
    AuthEffectsModule
  ]
})
export class AuthModule { }