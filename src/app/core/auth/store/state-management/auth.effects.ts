import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authFailure, startAuthAttempt, authSuccess } from "./auth.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { AuthResponseSuccess } from "../../interfaces/auth-response-success";
import { AuthRequestBodyModel } from "../../models/auth-request-body.model";
import { UnknownError } from "src/app/core/errors/unknown-error";
import { JwtUtils } from "src/app/core/utils/jwt/jwt.utils";

@Injectable()
export class AuthEffects {
    sendAuthRequest = createEffect(() => this.actions$.pipe(
        ofType(startAuthAttempt),
        switchMap((action) => this.authService
            .sendAuthRequest(new AuthRequestBodyModel(action.username, action.password))
            .pipe(
                map((response: AuthResponseSuccess) => 
                    authSuccess(JwtUtils.decodeToken(response.token))
                ),
                catchError((error: any) =>
                    of(authFailure({errorClassName: error instanceof Error ? 
                        error.name : new UnknownError().name}))
                )
    ))));

    constructor(
        public actions$: Actions, 
        private authService: AuthService, 
    ) {}
}