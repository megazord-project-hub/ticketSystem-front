import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginFailure, startLoginAttempt, loginSuccess } from "./login.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LoginEffects {
    sendAuthRequest = createEffect(
        () => 
            this.actions$.pipe(
                ofType(startLoginAttempt),
                switchMap((action) =>
                    this.autenticacaoService
                        .sendAuthRequest(action.login, action.password)
                        .pipe(
                            map(response => loginSuccess({token: response.token ? response.token : ''})),
                            catchError(response => of(loginFailure({erro: response.error})))
                        )
                )
            )

    );

    constructor(public actions$: Actions, private autenticacaoService: AuthService) {}
}