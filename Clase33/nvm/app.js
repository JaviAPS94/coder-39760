import express from 'express';
import * as MATH from '39760ap';

const app = express();

app.get('/:action', (req, res) => {
    const operacion = req.params.action
    const { a, b } = req.query;
    let result;
    switch (operacion) {
        case 'suma':
            result = MATH.suma(Number(a), Number(b));
            break;
        case 'resta':
            result = MATH.resta(Number(a), Number(b));
            break;
        case 'multiplicacion':
            result = MATH.multiplicacion(Number(a), Number(b));
            break;
        case 'division':
            result = MATH.division(Number(a), Number(b));
            break;
        default:
            break;
    };

    res.send({result});
});

app.listen(8080);