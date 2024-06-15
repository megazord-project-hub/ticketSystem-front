import { BaseError } from "src/app/core/errors/base-error";

export class InvalidCredentialsError extends BaseError {
    constructor() {
        const message = "403 - Forbidden: Username or password is invalid.";
        super(message, InvalidCredentialsError.name);
    }
}