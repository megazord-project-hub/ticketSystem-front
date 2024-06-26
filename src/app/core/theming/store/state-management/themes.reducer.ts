import { createFeature, createReducer, on } from "@ngrx/store";
import { ThemeState } from "./interfaces/theme-state";
import { ThemeTypes } from "./enums/theme-types.enum";
import { changeTheme } from "./themes.actions";

const initialState: ThemeState = {
    themeType: ThemeTypes.Light
}

export const themeFeature = createFeature({
    name: 'theme',
    reducer: createReducer(
        initialState,
        on(changeTheme, (state, action) => ({
            ...initialState, 
            themeType: action.themeType
        }))
    )
});

export const {
    name,
    reducer,
    selectThemeState
} = themeFeature;