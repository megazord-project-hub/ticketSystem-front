import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { falhaLogin, iniciarTentativaLogin, sucessoLogin } from "./login.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class LoginEffects {

    enviarRequisicaoAutenticacao = createEffect(
        () => 
            this.actions$.pipe(
                ofType(iniciarTentativaLogin),
                switchMap((action) =>
                    this.autenticacaoService
                        .realizarLogin(action.login, action.password)
                        .pipe(
                            map(response => sucessoLogin({token: response.token ? response.token : ''})),
                            catchError(response => of(falhaLogin({erro: response.error})))
                        )
                )
            )

    );

    constructor(public actions$: Actions, private autenticacaoService: AuthService) {}

}