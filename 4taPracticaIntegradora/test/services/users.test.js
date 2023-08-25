import chai from 'chai';
import sinon from 'sinon';
import UsersService from '../../src/services/users.js';
import UsersRepository from '../../src/repositories/users.js';
import Users from '../../src/dao/dbManagers/users.js'

const expect = chai.expect;

describe('Users service', () => {
    it('Debería retornar el usuario por email', async () => {
        const stubValue = {
            first_name: 'coder',
            last_name: 'house',
            email: 'ch@coderhouse.com',
            password: 'asdasd344334@@#',
            role: 'admin'
        }; 
        
        const usersDao = new Users();

        const userRepository = new UsersRepository(usersDao); 

        const usersService = new UsersService(userRepository);

        const stub = sinon.stub(userRepository, 'getByEmail').returns(stubValue);

        const result = await usersService.getByEmail('test@test.com');

        console.log(result);

        expect(stub.calledOnce).to.be.true;
    });

    it('Debería lanzar un error de user not found en el caso de no encontrar el usuario', async() => {
        const usersDao = new Users();

        const userRepository = new UsersRepository(usersDao); 

        const usersService = new UsersService(userRepository);

        sinon.stub(userRepository, 'getByEmail').returns(null);

        await usersService.getByEmail('test@test.com').catch((error) => {
            expect(error.message).to.eql('User not found');
        })
    })
})