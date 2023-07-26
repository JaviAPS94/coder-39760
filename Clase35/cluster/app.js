import cluster from 'cluster';
import express from 'express';
import { cpus } from 'os';

console.log(cluster.isPrimary);

const numeroProcesadores = cpus().length;
console.log(numeroProcesadores);

if (cluster.isPrimary) {
    console.log('Soy el proceso primario, y mi trabajo es generar workers');
    for (let i = 0; i < numeroProcesadores; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`El trabajador con pid ${worker.process.pid} murió`);
        cluster.fork();
    })
} else {
    console.log('Soy un proceso forkeado y mi rol es ser un worker');
    const app = express();

    app.get('/', (req, res) => {
        res.send({ message: "Servidor en express modo cluster" });
    });

    app.get("/operacionsencilla", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        res.send({ message: "Operación sencilla", result: sum });
    });

    app.get("/operacioncompleja", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 5e8; i++) {
            sum += i;
        }
        res.send({ message: "Operación compleja", result: sum });
    });

    app.listen(8080, () => {
        console.log('Server listening on port 8080')
    });
}