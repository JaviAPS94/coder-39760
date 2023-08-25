import express from 'express';
import { __dirname, __mainDirname } from './utils/utils.js';
import { addLogger } from './utils/logger.js';
import viewsRouter from './routes/views.js'
import handlebars from 'express-handlebars';
import CoursesRouter from './routes/courses.js';
import UsersRouter from './routes/users.js';
import StudentsRouter from './routes/students.js';
import passport from 'passport';
import initializePassport from './config/passport.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import swaggerFile from '../swagger-output.json' assert { type: 'json' };

const coursesRouter = new CoursesRouter();
const usersRouter = new UsersRouter();
const studentsRouter = new StudentsRouter();

const app = express();

initializePassport();
app.use(passport.initialize());

app.use(addLogger);

// const swaggerOptions = {
//     definition: {
//         openapi: '3.0.1',
//         info: {
//             title: 'Documentación de nuestra 4ta práctica integradora',
//             description: 'API usada para el manejo de asignación de estudiantes a sus respectivos cursos.'
//         }
//     },
//     apis: [`${__mainDirname}/docs/**/*.yaml`]
// };

// console.log(__mainDirname);

// const specs = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerFile));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/users', usersRouter.getRouter());
app.use('/api/courses', coursesRouter.getRouter());
app.use('/api/students', studentsRouter.getRouter());

app.listen(8080);