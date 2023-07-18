import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hola mundo update");
});

app.listen(8080);