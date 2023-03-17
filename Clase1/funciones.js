function sumar(parametro1, parametro2) {
    return parametro1 + parametro2;
}

const resultadoSuma = sumar(4, 5);
console.log(resultadoSuma);

const resultadoSumaFlecha = (parametro1, parametro2) => {
    return parametro1 + parametro2;
};

const resultadoSumaFlecha2 = (parametro1, parametro2) => parametro1 + parametro2; 

console.log(resultadoSumaFlecha(7, 8));
console.log(resultadoSumaFlecha2(6, 2));
