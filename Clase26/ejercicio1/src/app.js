import express from 'express'
import './dao/dbManagers/dbConfig.js'
import userRouter from './routes/users.router.js';
import toysRouter from './routes/toys.router.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/toys', toysRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080')
})