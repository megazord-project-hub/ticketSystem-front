import * as jwt_decode from 'jwt-decode';
import { TokenDecodingError } from "./errors/token-decoding-error";
import { TokenData } from './interfaces/token-data';

export class JwtUtils {

    static decodeToken<T>(token: string): TokenData<T> {
        try { 
            const decodedToken: T = jwt_decode.jwtDecode<T>(token);
            const tokenData: TokenData<T> = {encoded: token, decoded: decodedToken};
            return tokenData;
        } catch (error: any) {
            throw new TokenDecodingError(token);
        }
    }
}