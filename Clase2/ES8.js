const objeto1 = {
    impuesto1: 12,
    impuesto2: 42,
    impuesto3: 35
};

const soloPropiedades = Object.keys(objeto1);
const soloValores = Object.values(objeto1);
const entradas = Object.entries(objeto1);

console.log(soloPropiedades);
console.log(soloValores);
console.log(entradas);

const impuestosTotales = soloValores
    .reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

console.log(impuestosTotales);