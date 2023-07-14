import express from "express";
import compression from 'express-compression';

const app = express();

app.use(express.json());

// app.use(compression());
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}));

app.get('/string', (req, res) => {
    let myString = 'Hola coders, este endpoint tiene la respuesta muy pesada';
    for(let i=0; i < 100000; i++) {
        myString += 'Hola coders, este endpoint es muy pesado';
    }
    res.send(myString);
});

app.listen(8080);