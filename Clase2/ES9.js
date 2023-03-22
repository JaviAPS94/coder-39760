const objeto1 = {
    propiedad1: 2,
    propiedad2: 'b',
    propiedad3: true
};

const objeto2 = {
    propiedad4: 'c',
    propiedad5: [1, 2, 3, 4]
};

const objetoResultante = {
    ...objeto1, ...objeto2
};

console.log(objetoResultante);


const objeto3 = {
    valora: 1,
    b: 2,
    c: 3
};

// const a = objeto3.a;
// const b = objeto3.b;
// const c = objeto3.c;

// const { a, b, c } = objeto3;

const { valora: variablePrueba, b, ...result } = objeto3;

console.log(variablePrueba);
console.log(b);
console.log(result);