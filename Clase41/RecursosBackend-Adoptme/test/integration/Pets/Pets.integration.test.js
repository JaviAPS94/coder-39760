import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing de mascotas', () => {
    it('POST de /api/pets debe crearr una mascota correctamentte', async () => {
        const petMock = {
            name: 'Patitas',
            specie: 'Perro',
            birthDate: '10-10-2015'
        };

        const { statusCode, ok, _body } = await requester.post('/api/pets').send(petMock);

        expect(statusCode).to.be.eql(200);
        expect(_body.payload).to.have.property('_id');
    });

    it('POST de /api/pets se debe corroborrar que la mascota tenga el campo adopted en false', async () => {
        const petMock = {
            name: 'Patitas campo adopted',
            specie: 'Perro',
            birthDate: '10-10-2019'
        };

        const { statusCode, _body } = await requester.post('/api/pets').send(petMock);

        expect(statusCode).to.be.eql(200);
        expect(_body.payload).to.have.property('adopted');
        expect(_body.payload.adopted).to.be.eql(false);
    });

    it('POST de /api/pets se debe corroborrar que si no se envia el nombrre debe retornar un bad request (400)', async () => {
        const petMock = {
            specie: 'Perro',
            birthDate: '10-10-2019'
        };

        const { statusCode, _body } = await requester.post('/api/pets').send(petMock);

        expect(statusCode).to.be.eql(400);
        expect(_body).to.have.property('error');
        expect(_body.error).to.be.eql('Incomplete values');
    });

    it('GET de /api/pets se debe corroborrar que la respuesta tiene los campos status y payload, además el payload debe ser un arreglo', async () => {
        const { statusCode, _body } = await requester.get('/api/pets');

        expect(statusCode).to.be.eql(200);
        expect(_body).to.have.property('status');
        expect(_body).to.have.property('payload');
        expect(Array.isArray(_body.payload)).to.be.eql(true);
    });

    it('PUT de /api/pets se debe corroborrar que se actualice correctamente la información de nuestra mascota', async () => {
        const petMock = {
            name: 'Patitas put',
            specie: 'Perro',
            birthDate: '05-05-2022'
        };

        const { _body } = await requester.post('/api/pets').send(petMock);

        const id = _body.payload._id;

        const petMockUpdated = {
            name: 'Patitas put updated',
            specie: 'Perro updated',
            birthDate: '05-10-2022'
        };

        const putResult = await requester.put(`/api/pets/${id}`).send(petMockUpdated);

        expect(putResult.statusCode).to.be.eql(200);
        expect(putResult._body.message).to.be.eql('pet updated');
    });

    it('DELETE de /api/pets se debe corroborrar que se eelimine correctamente la última mascota agregada', async () => {
        const petMock = {
            name: 'Patitas delete',
            specie: 'Perro',
            birthDate: '05-05-2022'
        };

        const { _body } = await requester.post('/api/pets').send(petMock);

        const id = _body.payload._id;

        const deleteResult = await requester.delete(`/api/pets/${id}`);

        expect(deleteResult.statusCode).to.be.eql(200);

        const getResult = await requester.get('/api/pets');

        const pets = getResult._body.payload;

        expect(pets.find(pet => pet._id === id)).to.be.eql(undefined);
    });

    it('Debe subir la imagen del avatar de la mascota', async () => {
        const petMock = {
            name: 'Patitas con imagen',
            specie: 'Perro',
            birthDate: '10-10-2022'
        };

        const result = await requester.post('/api/pets/withimage')
            .field('name', petMock.name)
            .field('specie', petMock.specie)
            .field('birthDate', petMock.birthDate)
            .attach('image', './test/integration/Pets/coderDog.jpg');
        
        expect(result.status).to.be.eql(200);
        expect(result._body.payload).to.have.property('_id');
        expect(result._body.payload.image).to.be.ok;
    });
});