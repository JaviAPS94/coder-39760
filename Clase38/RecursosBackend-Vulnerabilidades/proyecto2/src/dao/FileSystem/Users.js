import __dirname from '../../utils.js';
import fs from 'fs';

//Si se hizo migración de trabajar con archivos a mongo, entonces el dao de FS es innecesario A06
//Los nombrres de los métodos en el caso de aplicar un patrón factory, deben ser los mismos A04
export default class Users {
    constructor() {
        this.path = `${__dirname}/files/users.json`;
        this.init();
    }
    init = async () => {
        if (!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, JSON.stringify([]));
    }
    getUsers = async () => {
        const data = await fs.promises.readFile(this.path, 'utf-8');
        const users = JSON.parse(data);
        return users;
    }

    getAllUsers = () => {
        return this.getUsers();
    }

    getUserById = async (id) => {
        const users = await this.getUsers();
        const user = users.find(u => u.id === id);
        return user;
    }

    saveUser = async (user) => {
        const users = await this.getUsers();
        if (users.length === 0) user.id = 1;
        else user.id = users[users.length - 1].id + 1;
        users.push(user);
        return user;
    }
}