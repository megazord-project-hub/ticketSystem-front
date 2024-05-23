import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "../store/login.effects";

@NgModule({
    imports: [
        // EffectsModule.forFeature([LoginEffects])
    ]
})
export class LoginEffectsModule {}