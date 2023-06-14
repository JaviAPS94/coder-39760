import { fileURLToPath } from "url";
import { dirname } from "path";
import { PRIVATE_KEY } from "./config/contants.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createHash = password =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidPassword = (user, password) =>
    bcrypt.compareSync(password, user.password);

const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
};

export {
    __dirname,
    createHash,
    isValidPassword,
    generateToken
}