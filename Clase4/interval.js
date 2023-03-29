const contador = () => {
    let contador = 1;

    const timer = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador > 5) {
            clearInterval(timer);
        }
    }, 1000)
}

console.log('inicio de tareas');
contador();
console.log('fin de tareas');
