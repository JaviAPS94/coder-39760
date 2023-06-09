import express from 'express';
import UsersRouter from './routes/users.router.js';
import SessionsRouter from './routes/sessions.router.js';

const usersRouter = new UsersRouter();
const sessionsRouter = new SessionsRouter();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', usersRouter.getRouter());
app.use('/api/sessions', sessionsRouter.getRouter());

app.listen(8080);