import mongoose from 'mongoose';
import CoursesDao from '../../src/dao/dbManagers/courses.js';
import chai from 'chai';

const expect = chai.expect;

await mongoose.connect('mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/4tapractica-test?retryWrites=true&w=majority');

let coursesDao

describe('Courses DAO', () => {
    beforeAll(() => {
        coursesDao = new CoursesDao();
    });

    beforeEach(async () => {
        try {
            await mongoose.connection.collections.courses.drop();
        } catch (error) {
            console.log(error);
        }
    });

    it('Debería retornar el listado de cursos', async () => {
        const courseMock = {
            title: 'Curso prueba',
            description: 'Curso backend prueba',
            teacher: 'Profesor de prueba',
            students: []
        };

        await coursesDao.save(courseMock);

        const result = await coursesDao.getAll();

        expect(Array.isArray(result)).to.be.eqls(true);
        expect(result[0].title).to.be.eqls('Curso prueba');
        expect(result[0].description).to.be.eqls('Curso backend prueba');
        expect(result[0].teacher).to.be.eqls('Profesor de prueba');
        expect(result[0].students).to.be.eqls([]);
    })
})