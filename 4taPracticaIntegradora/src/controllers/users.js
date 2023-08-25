import UsersRepository from "../repositories/users.js";
import { Users } from "../dao/factory.js";
import UsersService from '../services/users.js';
import { IncorrectLoginCredentials, UserNotFound, UserAlreadyExists } from "../utils/custom-exceptions.js";

const users = new Users();
const usersRepository = new UsersRepository(users);
const usersService = new UsersService(usersRepository);

const login = async (req, res) => {
    /* #swagger.tags = ['Users']
       #swagger.description = 'Login endpoint.'  */
    try {
        req.logger.info('Ejecutando método login');
        const { email, password } = req.body;
        const user = await usersService.getByEmail(email);
        const accessToken = await usersService.login(password, user);
        /* #swagger.responses[200] = {
            schema: { "$ref": "#/definitions/Login" }, description: "Login exitoso"
        } */
        res.sendSuccess({ accessToken });
    } catch (error) {
        req.logger.error(error.message);

        /* #swagger.responses[400] = {
            schema: { "$ref": "#/definitions/Error" }, description: "Bad Request"
        } */
        if (error instanceof UserNotFound) {
            return res.sendClientError(error.message);
        }

        if (error instanceof IncorrectLoginCredentials) {
            return res.sendClientError(error.message);
        }

        /* #swagger.responses[500] = {
            schema: { "$ref": "#/definitions/Error" }, description: "Internal Server Error"
        } */
        res.sendServerError(error);
    }
}

const register = async (req, res) => {
    /* #swagger.tags = ['Users']
       #swagger.description = 'Register endpoint.'  */
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