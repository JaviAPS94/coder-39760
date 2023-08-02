import UsersRepository from "../repositories/users.js";
import { IncorrectLoginCredentials, UserAlreadyExists, UserNotFound } from "../utils/custom-exceptions.js";
import { loginNotification } from "../utils/custom-html.js";
import { isValidPassword, generateToken, createHash } from "../utils/utils.js";
import { sendEmail } from "./mail.js";
import { Users } from "../dao/factory.js";

const users = new Users();
const usersRepository = new UsersRepository(users)

const getByEmail = async (email) => {
    const user = await usersRepository.getByEmail(email);
    if (!user) {
        throw new UserNotFound('User not found');
    }
    return user;
}

const login = async (password, user) => {
    const comparePassword = isValidPassword(user, password);

    if (!comparePassword) {
        throw new IncorrectLoginCredentials('incorrect credentials')
    }

    const accessToken = generateToken(user);

    const email = {
        to: user.email,
        subject: 'Intento de login',
        html: loginNotification
    }

    await sendEmail(email);

    return accessToken;
}

const getByEmailRegister = async (email) => {
    const user = await usersRepository.getByEmail(email);
    console.log(user);
    if (user) {
        throw new UserAlreadyExists('user already exists');
    }
}

const register = async (user) => {
    const hashedPassword = createHash(user.password);
    user.password = hashedPassword;
    const result = await usersRepository.save(user);
    return result;
}

export {
    getByEmail,
    login,
    getByEmailRegister,
    register
}