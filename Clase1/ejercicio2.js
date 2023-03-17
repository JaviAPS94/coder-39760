class Contador {
    constructor(responsable) {
        this.responsable = responsable;
        this.conteo = 0;
    }

    static contadorGlobal = 0;

    obtenerResponsable = () => {
        return this.responsable;
    };

    contar = () => {
        this.conteo++;
        Contador.contadorGlobal++;
    }

    obtenerCuentaIndividual = () => {
        return this.conteo;
    }

    static obtenerCuentaGlobal = () => {
        return Contador.contadorGlobal;
    }
};

Contador.obtenerCuentaGlobal();

const contador1 = new Contador('Alejandro');
contador1.contar(parametro1);

console.log(contador1.obtenerCuentaIndividual());
console.log(contador1.obtenerCuentaGlobal());

const contador2 = new Contador('Alex');
contador2.contar(parametro1);

console.log(contador2.obtenerCuentaIndividual());
console.log(contador2.obtenerCuentaGlobal());

const contador3 = new Contador('Federico');
contador3.contar(parametro1);

console.log(contador3.obtenerCuentaIndividual());
console.log(contador3.obtenerCuentaGlobal());
