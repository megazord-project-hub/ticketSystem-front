import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface LoginAttemptResponse {
    token?: string;
    error?: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private httpClient: HttpClient) {}

    sendAuthRequest(username: string, password: string): Observable<LoginAttemptResponse> {
        const requestBody = {username: username, password: password};

        return this.httpClient.post<LoginAttemptResponse>(
            'http://localhost:8080/auth/authenticate', 
            requestBody
        );
    }

}