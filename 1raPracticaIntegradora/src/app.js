import express from 'express';
import __dirname from './utils.js';
import usersRouter from './routes/users.js'
import coursesRouter from './routes/courses.js'
import viewsRouter from './routes/views.js'
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);

try {
    await mongoose.connect('mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/ecommerce?retryWrites=true&w=majority');
    console.log('DB CONNECTED')
} catch (error) {
    console.log(error);
}

app.listen(8080);