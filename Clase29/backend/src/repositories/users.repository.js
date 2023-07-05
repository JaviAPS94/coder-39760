import UsersDao from '../dao/classes/users.dao.js';

export default class UsersRepository {
    constructor() {
        this.dao = new UsersDao();
    }

    getUsers = async () => {
        const result = await this.dao.getUsers();
        return result;
    }

    getUserById = async (id) => {
        const result = await this.dao.getUserById(id);
        return result;
    }

    createUser = async (user) => {
        const result = await this.dao.createUser(user);
        return result;
    }

    updateUser = async (id, user) => {
        const result = await this.dao.updateUser(id, user);
        return result;
    }
}