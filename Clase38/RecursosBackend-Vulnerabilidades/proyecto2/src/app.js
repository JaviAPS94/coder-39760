import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';
import usersRouter from './routes/users.router.js';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
//String de conexión a BDD quemado, debería ser manejado como una variable de ambiente A05
mongoose.connect('URL de mongo')
app.engine('handlebars',handlebars.engine());
app.set('views',`${__dirname}/views`);
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/users',usersRouter);

//Vulnerabilidad el puerto esta quemado, cambiar a una varriable de ambiente A05
app.listen(8080,()=>console.log(`Listening on PORT 8080`))