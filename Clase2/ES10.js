const cadena1 = `        hola`;

const cadena2 = cadena1.trim();

console.log(cadena1.length);
console.log(cadena2);
console.log(cadena2.length);

const arregloAnidado = ["1", 2, 3, 4, [5, 6, 7], [8, 9, 10, [11, 12, 13]]];

console.log(arregloAnidado.flat(10));