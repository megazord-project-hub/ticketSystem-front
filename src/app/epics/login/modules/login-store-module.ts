import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { loginReducer } from "../store/login.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature('login', loginReducer)
    ]
})
export class LoginStoreModule {}