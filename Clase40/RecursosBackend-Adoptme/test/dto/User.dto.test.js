import chai from 'chai';
import UserDTO from '../../src/dto/User.dto.js';

const expect = chai.expect;

describe('Probando nuestro dto de usuarios', () => {
    it('Corroborar que el DTO unifique el nombre y el apellido', async () => {
        const user = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@gmail.com',
            password: '$%#$%ASDASD'
        };

        const result = UserDTO.getUserTokenFrom(user);
        expect(result.name).to.be.equal('Coder House');
    });

    it('Corroborar que el DTO elimine propiedades innecesarias', async () => {
        const user = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@gmail.com',
            password: '$%#$%ASDASD'
        };

        const result = UserDTO.getUserTokenFrom(user);
        expect(result.first_name).to.be.equal(undefined);
        expect(result.last_name).to.be.equal(undefined);
        expect(result.password).to.be.equal(undefined);
    });
})