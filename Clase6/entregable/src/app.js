import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

//Creamos la instancia de la clase
const productManager = new ProductManager('./productos.json');

app.use(express.urlencoded({extended: true}));


//Ruta /products tipo get app.get llamar al método getAll de la clase ProductManager para esto hay que instanciar la clase
app.get('/products', async (req, res) => {
    const products = await productManager.getAll();
    res.send(products);
})

//Ruta /products/:pid tipo app.get donde debemos llamar al metodo getById de la clae ProductManager usar la instancia de la clase ya creada

//Ejmplo de async await llamado a la clase ProductMnager
app.get('/', async (req,res)=> {
    const products = await productManager.getAll();
    res.send({products});
})

app.listen(8080,()=>console.log("Listening on 8080"))