import UserManager from './managers/UserManager.js';

const manager = new UserManager('./files/Usuarios.json');

const env = async () => {
    const usuarios = await manager.getUsers();
    console.log(usuarios);

    // const user = {
    //     nombre: 'Alex',
    //     apellido: 'Pinaida',
    //     nombreUsuario: 'alex',
    //     contrasena: '1234'
    // };

    // await manager.createUser(user);
    //1234 === 1234
    //adfajdfkasdf === asdfasfdasdf
    const usersResult = await manager.getUsers();
    await manager.validateUser('alex', 'sdfgsdfg');
    console.log(usersResult);
}

env();