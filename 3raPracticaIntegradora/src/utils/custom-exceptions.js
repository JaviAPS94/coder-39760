export class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class IncorrectLoginCredentials extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

export class UserAlreadyExists extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}