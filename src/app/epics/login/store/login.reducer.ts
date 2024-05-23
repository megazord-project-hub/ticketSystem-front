import { createFeature, createReducer, on } from "@ngrx/store";
import { loginFailure, startLoginAttempt, loginSuccess } from "./login.actions";

export interface LoginState {
    nomeUsuario: string;
    descricaoErroLogin: string;
    aguardandoRespostaAutenticacao: boolean;
    tokenAutenticacao: string;
}

export const stateInicial: LoginState = {
    nomeUsuario: '',
    descricaoErroLogin: '',
    aguardandoRespostaAutenticacao: false,
    tokenAutenticacao: ''
}

export const loginFeature = createFeature({
    name: 'login',
    reducer: createReducer(
        stateInicial,
        on(startLoginAttempt, (state, action) => ({
            ...stateInicial, 
            nomeUsuario: action.login,
            aguardandoRespostaAutenticacao: true
        })),
        on(loginSuccess, (state, action) => ({
            ...state, 
            aguardandoRespostaAutenticacao: false,
            tokenAutenticacao: action.token
        })),
        on(loginFailure, (state, action) => ({
            ...state,
            aguardandoRespostaAutenticacao: false,
            descricaoErroLogin: action.erro
        }))
    )
});

export const {
    name,
    reducer,
    selectLoginState,
    selectNomeUsuario,
    selectDescricaoErroLogin,
    selectAguardandoRespostaAutenticacao,
    selectTokenAutenticacao
} = loginFeature;