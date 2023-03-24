const valoresOriginales = [1, 2, 3, 4, 5];

const funcionCallback = (valor) => {
    if (valor % 2 === 0) {
        return valor;
    } else {
        return "no es par";
    }
}

const nuevosValores = valoresOriginales.map(funcionCallback);

// console.log(nuevosValores);

//Mi propia funcion map
const miFuncionMap = (arreglo, callback) => {
    const nuevoArreglo = [];
    for (let i = 0; i < arreglo.length ; i++) {
        const nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
};

const resultado = miFuncionMap(valoresOriginales, x => x * 2);
console.log(resultado);