import { BaseError } from "./base-error";

export class UnknownError extends BaseError {
    constructor() {
        const message = 'An unknown error has occurred.';
        super(message, UnknownError.name);
    }
}