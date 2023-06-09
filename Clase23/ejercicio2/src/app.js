import express from 'express';
import dictionaryRouter from './routes/dictionary.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/dictionary', dictionaryRouter);

app.listen(8080);