import { createAction, props } from "@ngrx/store";
import { ThemeState } from "./interfaces/theme-state";

export const changeTheme = createAction(
    '[Themes] Change Theme',
    props<ThemeState>()
);