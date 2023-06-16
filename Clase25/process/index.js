process.on('exit', code => {
    console.log(code);
    if(code===-4) {
        console.log('Proceso finalizado por argumentación inválida en una función');
    }
});

// // process.on('uncaughtException', error => {
// //     console.log('Atrapa excepciones no controladas')
// //     console.log(error);
// // });

process.on('message', data => {
    console.log(data);
});

// console.log(test);

const numbers = [1,2,3,4, true, "test"]

function listNumbers(numbers) {
    const numberTypes = numbers.map(number => typeof(number));
    for(numberType of numberTypes) {
        if(numberType != 'number') {
            process.exit(-4)
        }
    }
    console.log(numberTypes);
}

listNumbers(numbers);