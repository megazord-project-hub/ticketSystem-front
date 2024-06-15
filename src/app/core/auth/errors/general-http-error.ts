import { BaseError } from "src/app/core/errors/base-error";

export class GeneralHttpError extends BaseError {
    constructor(errorStatusCode: number, originalMessage: string) {
        const newMessage = errorStatusCode + ' - ' + originalMessage + '.';
        super(newMessage, GeneralHttpError.name);
    }
}