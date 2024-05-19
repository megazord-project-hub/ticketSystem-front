import { createAction, props } from "@ngrx/store";

export const iniciarTentativaLogin = createAction(
    '[Login] Iniciar Tentativa Login',
    props<{ login: string, senha: string }>()
);

export const sucessoLogin = createAction(
    '[Login] Sucesso Login',
    props<{ token: string }>()
);

export const falhaLogin = createAction(
    '[Login] Falha Login',
    props<{ erro: string }>()
);