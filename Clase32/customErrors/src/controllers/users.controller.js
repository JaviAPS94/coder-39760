import CustomError from '../middlewares/errors/CustomError.js';
import EErrors from '../middlewares/errors/enums.js';
import { generateUserErrorInfo } from '../middlewares/errors/info.js';
import * as usersService from '../services/users.service.js';

const getUsers = async (req, res) => {
    const result = await usersService.getUsers();
    res.json({
        status: 'success',
        payload: result
    })
}

const saveUser = async (req, res) => {
    const { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email){
        throw CustomError.createError({
            name: 'UserError',
            cause: generateUserErrorInfo({
                first_name,
                last_name,
                email
            }),
            message: 'Error trying to create user',
            code: EErrors.INVALID_TYPE_ERROR
        })
    }

    const user = {
        first_name,
        last_name,
        email
    }

    const result = await usersService.saveUser(user);

    res.send({
        status: 'success',
        payload: result
    })
}

export {
    getUsers,
    saveUser
}