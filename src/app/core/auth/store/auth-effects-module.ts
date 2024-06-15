import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state-management/auth.effects";

@NgModule({
    imports: [
        EffectsModule.forFeature(AuthEffects)
    ]
})
export class AuthEffectsModule {}