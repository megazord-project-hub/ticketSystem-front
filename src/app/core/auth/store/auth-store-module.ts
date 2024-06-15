import { NgModule } from "@angular/core";
import { authFeature } from "./state-management/auth.reducer";
import { StoreModule } from "@ngrx/store";

@NgModule({
    imports: [
        StoreModule.forFeature(authFeature)
    ],
})
export class AuthStoreModule {}