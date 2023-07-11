import express from 'express';
import userRouter from './routes/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', userRouter);

app.listen(8081);