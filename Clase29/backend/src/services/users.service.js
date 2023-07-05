import UsersRepository from '../repositories/users.repository.js';

const usersRepository = new UsersRepository();

const createUser = async(user) => {
    const result = await usersRepository.createUser(user);
    return result;
}

const getUsers = async () => {
    const result = await usersRepository.getUsers();
    return result;
}

const getUserById = async (id) => {
    const result = await usersRepository.getUserById(id);
    return result;
}

export {
    createUser,
    getUsers,
    getUserById
}