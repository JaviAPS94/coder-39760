import express from 'express';
import __dirname from './utils.js';
import authRouter from './routes/auth.router.js'
import cookieParser from 'cookie-parser';
import initializePassport from './config/passport.config.js';
import passport from 'passport';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());

//Passport
initializePassport();
app.use(passport.initialize());

app.use('/api/auth', authRouter);

app.listen(8080);