import express from 'express';
import cors from 'cors';

const app = express();

//front va a estar desplegado en el dominio https://coderhouse.com
//https://rappi.com

app.use(cors({
    origin: ["https://coderhouse.com"]
}));

app.get('/', (req, res) => {
    res.json({ message: 'Saludos clase 39760' });
});

//options

app.listen(3000);