import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { themeFeature } from "./state-management/themes.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature(themeFeature)
    ],
})
export class ThemesStoreModule {}