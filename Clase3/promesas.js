const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('No se puede hacer divisiones entre cero');
        } else {
            resolve(dividendo/divisor);
        }
    });
};

// dividir(6, 0)
//     .then(resultado => {
//         return resultado;
//     }).then(resultado => {

//     })

const funcionAsincrona = async () => {
    try {
        const resultado = await dividir(10 , 0);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

funcionAsincrona();