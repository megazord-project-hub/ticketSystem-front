// All Errors should extend this class
export abstract class BaseError implements Error {
    message: string;
    name: string;

    constructor(message: string, errorSubclassName: string) {
        this.message = message;
        this.name = errorSubclassName;
        console.error(message);
    }
}