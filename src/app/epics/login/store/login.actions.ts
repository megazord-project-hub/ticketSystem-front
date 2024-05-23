import { createAction, props } from "@ngrx/store";

export const startLoginAttempt = createAction(
    '[Login] Start Login Attempt',
    props<{ login: string, password: string }>()
);

export const loginSuccess = createAction(
    '[Login] Login Success',
    props<{ token: string }>()
);

export const loginFailure = createAction(
    '[Login] Login Failure',
    props<{ erro: string }>()
);