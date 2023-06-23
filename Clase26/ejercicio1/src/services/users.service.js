import { USERSDAO } from "../dao/index.js";

const saveUser = async (user) => {
    await USERSDAO.save(user);
    return user;
}

const getUsers = async () => {
    const users = await USERSDAO.getAll();
    return users;
}

export {
    saveUser,
    getUsers
}