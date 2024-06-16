import { createFeature, createReducer, on } from "@ngrx/store";
import { authFailure, startAuthAttempt, authSuccess } from "./auth.actions";
import { AuthState } from "../interfaces/auth-state";

const initialState: AuthState = {
    username:       null,
    fullname:       null,
    errorClassName: null,
    token:          null,
    sessionStart:   null,
    sessionTimeout: null,
    isLoading:      false
}

export const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(startAuthAttempt, (state, action) => ({
            ...initialState, 
            username: action.username,
            isLoading: true
        })),
        on(authSuccess, (state, action) => ({
            ...state, 
            username: action.decoded.sub,
            fullname: action.decoded.name,
            error: null,
            isLoading: false,
            token: action.encoded,
            sessionStart: new Date(Number(action.decoded.iat) * 1000),
            sessionTimeout: new Date(Number(action.decoded.exp) * 1000)
        })),
        on(authFailure, (state, action) => ({
            ...state,
            isLoading: false,
            error: action.errorClassName
        }))
    )
});

export const {
    name,
    reducer,
    selectAuthState,
    selectErrorClassName,
    selectIsLoading,
    selectToken,
    selectUsername,
    selectFullname,
    selectSessionStart,
    selectSessionTimeout
} = authFeature;