export default class CustomError {
    static createError({ name = "Error", cause, message, code = 1 }) {
        let error = new Error(message, { cause });
        error.name = name;
        error.code = code;
        return error;
    }
}