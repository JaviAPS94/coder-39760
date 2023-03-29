// console.log('inicio de tareas');
// console.log('haciendo tarea 1');
// console.log('haciendo tarea 2');
// console.log('fin de tareas');

const temporizador = (callback) => {
    setTimeout(() => {
        callback();
    }, 5000);
};

const operacion = () => console.log('Realizando operación');

console.log('inicio de tareas');

temporizador(operacion);

console.log('fin de tareas');
