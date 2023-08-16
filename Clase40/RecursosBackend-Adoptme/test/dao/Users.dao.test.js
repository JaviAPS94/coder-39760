import mongoose from 'mongoose';
import User from '../../src/dao/Users.dao.js';
import Assert from 'assert';

await mongoose.connect('mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/testing?retryWrites=true&w=majority');

const assert = Assert.strict;

let usersDao

describe('Probando nuestro dao de usuarios', () => {
    before(() => {
        usersDao = new User();
    });

    beforeEach(async () => {
        try {
            await mongoose.connection.collections.users.drop();
        } catch (error) {
            console.log(error);   
        }
    });

    it('El dao debe poder obtener los usuarios en formato de arreglo', async () => {
        const result = await usersDao.get();
        assert.strictEqual(Array.isArray(result), true);
    });

    //Escenario 1
    it('El dao debe poder agregar un usuario correctamente a la base de datos', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: '1234'
        };

        const result = await usersDao.save(mockUser);
        console.log(result);
        assert.ok(result._id);
    });

    //Escenario 2
    it('Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.', async () => {
        const mockUser = {
            first_name: 'Nora',
            last_name: 'Saucedo',
            email: 'ns@gmail.com',
            password: '12345'
        }

        const result = await usersDao.save(mockUser);

        const user = await usersDao.getBy({ email: result.email });

        assert.deepStrictEqual(user.pets, []);
    });

    //Escenario 3
    it('El Dao puede obtener  a un usuario por email', async () => {
        const mockUser = {
            first_name: 'Nora',
            last_name: 'Saucedo',
            email: 'ns@gmail.com',
            password: '12345'
        };

        const result = await usersDao.save(mockUser);

        const user = await usersDao.getBy({ email: result.email });

        assert.strictEqual(typeof user, 'object');
    })
});