import { NgModule } from "@angular/core";
import { loginFeature } from "../store/login.reducer";
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [StoreModule.forFeature(loginFeature)],
})
export class LoginStoreModule {}