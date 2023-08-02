export default class UsersRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getByEmail = async (email) => {
        const result = await this.dao.getByEmail(email);
        return result;
    }

    save = async (user) => {
        const result = await this.dao.save(user);
        return result;
    }
}