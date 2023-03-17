const variableGlobal = 'test';

function prueba() {
    const variable = 1;
    console.log(variable);
    console.log(variableGlobal);
    if (true) {
        const variable2 = 2;
        console.log(variable2);
        console.log(variable);
    }
}

prueba();
console.log(variableGlobal);

const cadena1 = 'Hola';
const cadena2 = 'Soy Alex';

// console.log(cadena1 + " " + cadena2);
console.log(`ERROR: ${error}`);