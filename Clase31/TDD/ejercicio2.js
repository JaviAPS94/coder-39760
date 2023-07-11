const loguear = (user, password) => {
    if(!password) {
        return "No se ha proporcionado un password";
    } else if (!user) {
        return "No se ha proporcionado un usuario";
    } else if (password !== "123") {
        return "Contraseña incorrecta";
    } else if (user !== 'coderUser') {
        return "Credenciales incorrectas";
    } else {
        return "logueado";
    }
}

let testPasados = 0;
const testTotales = 5;

//Si se pasa un password vacío, la función debe consologuear (“No se ha proporcionado un password”)
const resultadoTest1 = loguear('coderUser', '');
if(resultadoTest1 === 'No se ha proporcionado un password') {
    console.log('Test 1: Correcto');
    testPasados++;
} else {
    console.log(`Test 1: Incorrecto, se recibió ${resultadoTest1} y se esperaba No se ha proporcionado un password`)
}

//Si se pasa un usuario vacío, la función debe consologuear (“No se ha proporcionado un usuario”)
const resultadoTest2 = loguear('', '1234');
if(resultadoTest2 === 'No se ha proporcionado un usuario') {
    console.log('Test 2: Correcto');
    testPasados++;
} else {
    console.log(`Test 2: Incorrecto, se recibió ${resultadoTest2} y se esperaba No se ha proporcionado un usuario`)
}

//Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”)
const resultadoTest3 = loguear('coderUser', 'abcd');
if(resultadoTest3 === 'Contraseña incorrecta') {
    console.log('Test 3: Correcto');
    testPasados++;
} else {
    console.log(`Test 3: Incorrecto, se recibió ${resultadoTest3} y se esperaba Contraseña incorrecta`)
}
//Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”)
const resultadoTest4 = loguear('pepito', '123');
if(resultadoTest4 === 'Credenciales incorrectas') {
    console.log('Test 4: Correcto');
    testPasados++;
} else {
    console.log(`Test 4: Incorrecto, se recibió ${resultadoTest4} y se esperaba Credenciales incorrectas`)
}
//Si  el usuario y contraseña coinciden, consologuear (“logueado”)
const resultadoTest5 = loguear('coderUser', '123');
if(resultadoTest5 === 'logueado') {
    console.log('Test 5: Correcto');
    testPasados++;
} else {
    console.log(`Test 5: Incorrecto, se recibió ${resultadoTest5} y se esperaba logueado`)
}

if(testPasados === testTotales) console.log('Pruebas pasadas exitosamente')
else console.log(`Se pasaron ${testPasados} tests de un total de ${testTotales}`);


//Contratos entre el front y el back
//api/products
// [
//     {
//         id: "12324",
//         price: 100,
//         description: 'test',
//         name: 'test'
//     }
// ]
//Mockear el resultado del servicio para retornar un arreglo de objetos
//la estructura ya definida
//Voy a retornar la data de mi BDD