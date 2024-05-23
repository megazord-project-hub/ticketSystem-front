import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginAttemptResponse } from "../interfaces/login-attempt-response.interface";

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private httpClient: HttpClient) {}

    sendAuthRequest(login: string, password: string): Observable<LoginAttemptResponse> {
        const requestBody = {username: login, password: password};

        return this.httpClient.post<LoginAttemptResponse>(
            'http://localhost:8080/auth/authenticate', 
            requestBody
        );
    }

}