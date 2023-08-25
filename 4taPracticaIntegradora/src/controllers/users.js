import * as usersService from '../services/users.js';
import { IncorrectLoginCredentials, UserNotFound, UserAlreadyExists } from "../utils/custom-exceptions.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersService.getByEmail(email);
        const accessToken = await usersService.login(password, user);
        res.sendSuccess({ accessToken });
    } catch (error) {
        req.logger.error(error.message);

        if (error instanceof UserNotFound) {
            return res.sendClientError(error.message);
        }

        if (error instanceof IncorrectLoginCredentials) {
            return res.sendClientError(error.message);
        }

        res.sendServerError(error);
    }
}

const register = async (req, res) => {
    try {
        const { first_name, last_name, role, email, password } = req.body;

        if (!first_name || !last_name || !role || !email || !password)
            return res.sendClientError('incomplete values')

        await usersService.getByEmailRegister(email);

        const register = await usersService.register({ ...req.body });
        res.sendSuccess(register);
    } catch (error) {
        req.logger.error(error.message);
        
        if (error instanceof UserAlreadyExists) {
            return res.sendClientError('user already exists')
        }
        res.sendServerError(error.message);
    }
}

export {
    login,
    register
}