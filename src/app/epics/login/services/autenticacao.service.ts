import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TentativaLoginResponse } from "../models/tentativa-login-response.model";

@Injectable({providedIn: 'root'})
export class AutenticacaoService {

    constructor(private httpClient: HttpClient) {}

    realizarLogin(login: string, senha: string): Observable<TentativaLoginResponse> {
        const requestBody = {username: login, password: senha};

        return this.httpClient.post<TentativaLoginResponse>(
            'http://localhost:8080/auth/authenticate', 
            requestBody
        );
    }

}