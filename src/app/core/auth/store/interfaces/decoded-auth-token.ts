export interface DecodedAuthToken {
    exp: number,
    iat: number,
    name: string,
    role: string,
    sub: string
}