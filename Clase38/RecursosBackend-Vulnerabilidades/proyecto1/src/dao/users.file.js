//Una dependencia sin uso, implementación incompleta y nunca se va a usar esta dependencia A06
import fs from 'fs';
import __dirname from '../utils.js';

export default class UserService {
    constructor() {
        this.path(`${__dirname}/files/users.json`)
    }
}