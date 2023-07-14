import CustomError from "../middlewares/errors/CustomError.js";
import EErrors from "../middlewares/errors/enums.js";
import { generateUserErrorInfo } from "../middlewares/errors/info.js";

const users = [];

const getUsers = async() => {
    return users;
}

const saveUser = async(user) => {
    // throw CustomError.createError({
    //     name: 'UserError',
    //     cause: generateUserErrorInfo({
    //         first_name,
    //         last_name,
    //         email
    //     }),
    //     message: 'Error trying to create user',
    //     code: EErrors.INVALID_TYPE_ERROR
    // })

    if(users.length === 0) {
        user.id = 1
    } else {
        user.id = users[users.length - 1].id + 1;
    }

    users.push(user);
    return user;
}

export {
    saveUser,
    getUsers
}