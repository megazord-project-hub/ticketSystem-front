export interface AuthState {
    username:       null | string;
    fullname:       null | string;
    errorClassName: null | string;
    token:          null | string;
    sessionStart:   null | Date;
    sessionTimeout: null | Date;
    isLoading:      boolean;
}