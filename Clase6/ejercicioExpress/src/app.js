import express from 'express';

const app = express();

const usuarios = [
    { id: 1, nombre: 'Alex', apellido: 'Pinaida', edad: 28, genero: 'M' },
    { id: 2, nombre: 'Alejandro', apellido: 'Resk', edad: 25, genero: 'M' },
    { id: 3, nombre: 'Nora', apellido: 'Saucedo', edad: 22, genero: 'F' }
];

//
// [
//     {
//         id: 1,
//         name: 'Producto prueba',
//         description: 'Producto de prueba',
//         price: 1000
//     }
// ]

//Create  POST
//Read    GET
//Update  PUT
//Delete  DELETE

//Usuarios, productos, restaurantes, horarios, promociones
//obtencion de productos de nuestro ecommerce
app.get('/usuarios', (req, res) => {
    //Sistema de cache REDIS [{},{}] // medio segundo
    //Deberiamos ir a base de datos // 5 segundos
    //Una vez consultado la info a BDD retornamos a nuestro cliente
});

//Crear un producto
app.post('/products', (req, res) => {

});

//Actualizar información del producto(nombre, precio, descripcion´)
app.put('/products', (req, res) => {

});

//Eliminar un producto
app.delete('/products', (req, res) => {

})

app.get('/schedules')
//saludos
app.get('/saludo', (req, res) => {
    //Caso exitoso de retorno de información
    res.send('Hola a todos pero ahora desde express update');
    //Codigo de respuesta http
});

app.get('/bienvenida', (req, res) => {
    res.send(`<h1 style="color:blue;">Bienvenido a mi primer servidor express</h1>`)
});

app.get('/usuario', (req, res) => {
    res.send({
        nombre: 'Nora',
        apellido: 'Saucedo',
        edad: 20,
        correo: 'ns@hotmail.com'
    })
});

// id es un parametro
//req.params path param 
//req.query query param
// localhost:8080/usuarios/1


app.get('/usuario/:id', (req, res) => {
    const userId = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === userId);
    res.send(usuario);
});

// localhost:8080/usuarios?edad=28&genero=M&nombre=alex
app.get('/usuarios-busqueda', (req, res) => {
    const { genero, edad, nombre } = req.query;
    res.send({ genero, edad, nombre });
});
      //HTTP
// C   POST
// R   GET***
// U   PUT
// D   DELETE 

app.listen(8081, () => console.log('Listening on port 8080'));