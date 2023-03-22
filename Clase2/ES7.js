//Exponencial
const valoresBase = [1, 2, 3, 4, 5, 6];
//Operador map
//Arreglo de entrada => Arreglo
const nuevosValores = valoresBase.map((numero, indice) => numero**indice);
console.log(nuevosValores);

//Includes
const nombres = ['Alex', 'Mayra', 'Federico', 'Maria', 'Lucas'];

if (nombres.includes('asdfasd')) {
    console.log('Tenemos el elemento');
} else {
    console.log('No hay el elemento');
}