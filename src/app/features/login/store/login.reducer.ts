import { createFeature, createReducer, on } from "@ngrx/store";
import { loginFailure, startLoginAttempt, loginSuccess } from "./login.actions";

export interface LoginState {
    username: string;
    error: string;
    isLoading: boolean;
    token: string;
}

export const stateInicial: LoginState = {
    username: '',
    error: '',
    isLoading: false,
    token: ''
}

export const loginFeature = createFeature({
    name: 'login',
    reducer: createReducer(
        stateInicial,
        on(startLoginAttempt, (state, action) => ({
            ...stateInicial, 
            username: action.username,
            isLoading: true
        })),
        on(loginSuccess, (state, action) => ({
            ...state, 
            isLoading: false,
            token: action.token
        })),
        on(loginFailure, (state, action) => ({
            ...state,
            isLoading: false,
            error: action.error
        }))
    )
});

export const {
    name,
    reducer,
    selectLoginState,
    selectError,
    selectIsLoading,
    selectToken,
    selectUsername
} = loginFeature;