import { HttpClient, HttpErrorResponse, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthResponseSuccess } from "../interfaces/auth-response-success";
import { AuthRequestBodyModel } from "../models/auth-request-body.model";
import { InvalidCredentialsError } from "../errors/invalid-credentials-error";
import { GeneralHttpError } from "../errors/general-http-error";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private httpClient: HttpClient) {}

    sendAuthRequest(requestBody: AuthRequestBodyModel): Observable<AuthResponseSuccess> {
        return this.httpClient
            .post<AuthResponseSuccess>(
                'http://localhost:8080/auth/authenticate', 
                requestBody
            )
            .pipe(catchError((error: HttpErrorResponse) => {
                if (error.status === HttpStatusCode.Forbidden) {
                    return throwError(() => new InvalidCredentialsError());
                } else {
                    return throwError(() => new GeneralHttpError(error.status, error.message));
                }
            }));
    }
}