import { BaseError } from "src/app/core/errors/base-error";

export class TokenDecodingError extends BaseError {
    constructor(token: string) {
        const message = 
            'An error has occurred during token decoding.\n' +
            'You tried decoding the following token: \n' + token + '\n\n' +
            'Is it a string (it should be)? ' + ((typeof token === 'string') ? 'Yes' : 'No') + '\n' +
            'Please check if this token is valid on https://jwt.io/';
        super(message, TokenDecodingError.name);
    }
}