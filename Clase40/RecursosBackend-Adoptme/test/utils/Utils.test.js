import chai from 'chai';
import { createHash, passwordValidation } from '../../src/utils/index.js';

const expect = chai.expect;

describe('Probando nuestro módulo de utils', () => {
    it('La función debe realizar un hasheo efectivo de la contraseña', async () => {
        const password = '1234';
        const result = await createHash(password);
        expect(result).to.be.not.equal(password);
    });

    it('El hasheo debe poder compararse de manera efectiva', async () => {
        const password = '1234';
        const user = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: await createHash(password)
        }
        const result = await passwordValidation(user, password);
        expect(result).to.be.equal(true);
    });
})