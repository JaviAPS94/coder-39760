const delay = ret => {for(let i=0; i<ret*3e6; i++);}

function hacerTarea(num) {
    console.log('haciendo tarea ' + num)
    delay(100)
}

console.log('inicio de tareas');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tareas')
console.log('otras tareas ...')

console.log('inicio de tareas');

setTimeout(() => {
    console.log("haciendo tarea aincrona");
  }, "5000");

console.log('haciendo tarea 1');
console.log('haciendo tarea 2');
console.log('haciendo tarea 3');
console.log('fin tareas ...')