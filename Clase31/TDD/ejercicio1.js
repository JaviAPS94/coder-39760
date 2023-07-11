// const suma = (num1, num2) => {
//     //Implementación
//     if(!num1||!num2) return 0;
//     if(typeof num1 !== 'number' || typeof num2 !== 'number') return null;
//     const result = num1 + num2;
//     return result;
// }

//suma(2,3,4,5,6)
// const suma = (...numeros) => {
//     let resultado = 0;
//     if(numeros.length === 0) return 0;
//     for(let i=0; i < numeros.length; i++) {
//         if(typeof numeros[i] !== 'number') {
//             return null;
//         }
//         resultado += numeros[i];
//     }
//     return resultado;
// }

const suma = (...numeros) => {
    if(numeros.length === 0) return 0;
    if(!numeros.every((numero) => typeof numero === 'number')) return null;
    return numeros.reduce((a, b) => a + b);
}

let testPasados = 0;
let testTotales = 4;

//La función debe devolver null si algún parámetro no es numérico
console.log('Test 1: La función debe devolver null si algún parámetro no es numérico');

const resultadoTest1 = suma("2", 2);

//Este resultado debería ser null

if (resultadoTest1 === null) {
    console.log('Test 1: Correcto');
    testPasados++;
} else {
    console.log(`Test 1: Incorrecto, se recibió: ${typeof resultadoTest1} y se esperaba null`)
}

//La función debe devolver 0 si no se pasó ningún parámetro;
console.log('Test 2: La función debe devolver 0 si no se pasó ningún parámetro');

const resultadoTest2 = suma();

if(resultadoTest2 === 0) {
    console.log("Test 2: Correcto");
    testPasados++;
} else {
    console.log(`Test 2: incorrecto, se recibió ${typeof resultadoTest2} y se esperaba 0`);
}

//La función debe poder realizar la suma correctamente
console.log('Test 3: La función debe poder realizar la suma correctamente');

const resultadoTest3 = suma(2, 3);
if(resultadoTest3 === 5) {
    console.log('Test 3: Correcto');
    testPasados++;
} else {
    console.log(`Test 3: Incorrecto, se recibió ${resultadoTest3} y se esperaba 5`);
}

//La función debe poder hacer la suma con cualquier cantidad de números
console.log('Test 4: La función debe poder hacer la suma con cualquier cantidad de números');

const resultadoTest4 = suma(3,4,5,6);

if(resultadoTest4 === 18) {
    console.log('Test 4: Correcto');
    testPasados++;
} else {
    console.log(`Test 4: Incorrecto, se recibió ${resultadoTest4} y se esperaba 18`);
}

if(testPasados === testTotales) console.log('Pruebas pasadas exitosamente')
else console.log(`Se pasaron ${testPasados} tests de un total de ${testTotales}`);