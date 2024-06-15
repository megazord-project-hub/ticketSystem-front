import { createAction, props } from "@ngrx/store";
import { TokenData } from "src/app/core/utils/jwt/interfaces/token-data";
import { DecodedAuthToken } from "../interfaces/decoded-auth-token";
import { AuthRequestBodyModel } from "src/app/core/auth/models/auth-request-body.model";

export const startAuthAttempt = createAction(
    '[Auth] Start Auth Attempt',
    props<AuthRequestBodyModel>()
);

export const authSuccess = createAction(
    '[Auth] Auth Success',
    props<TokenData<DecodedAuthToken>>()
);

export const authFailure = createAction(
    '[Auth] Auth Failure',
    props<{ errorClassName: string }>()
);