import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: '1.0.0',
        title: 'Doocumentación generado con auto gen',
        description: 'Documentación after class 4ta práctica integradora'
    },
    host: 'localhost:8080',
    basePath: '/',
    schemes: ['http'],
    tags: [
        {
            'name': 'Users',
            'description': 'Servicios de usuarios' 
        }
    ],
    definitions: {
        Login: {
            accessToken: 'hgjasgdjha28734y8jaskdfnaksjf3245'
        },
        Error: {
            error: 'error message'
        }
    }
}

const outputFile = './swagger-output.json';
const endPointsFiles = ['./src/routes/courses.js','./src/routes/students.js','./src/routes/users.js'];

swaggerAutogen(outputFile, endPointsFiles, doc).then(async () => {
    await import('./src/app.js');
})