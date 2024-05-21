import { createReducer, on } from "@ngrx/store";
import { falhaLogin, iniciarTentativaLogin, sucessoLogin } from "./login.actions";

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

export const loginReducer = createReducer(
    stateInicial,
    on(iniciarTentativaLogin, (state, action) => ({
        ...stateInicial, 
        nomeUsuario: action.login,
        aguardandoRespostaAutenticacao: true
    })),
    on(sucessoLogin, (state, action) => ({
        ...state, 
        aguardandoRespostaAutenticacao: false,
        tokenAutenticacao: action.token
    })),
    on(falhaLogin, (state, action) => ({
        ...state,
        aguardandoRespostaAutenticacao: false,
        descricaoErroLogin: action.erro
    }))
);