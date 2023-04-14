import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import { __dirname } from './utils.js';

const app = express();

//Parametros de config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log('Time: ', Date.now());
//     next();
// });

function middleware1(req, res, next) {
    console.log('Time: ', Date.now());
    next();
}

//Configuracion para agregar funcionalidad de archivos estáticos
app.use(express.static(`${__dirname}/public`));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.get('/test', middleware1, (req, res) => {
    res.send('Hola mundo');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Error no contralado');
});

app.listen(8080, () => console.log('Server running on port 8080'));