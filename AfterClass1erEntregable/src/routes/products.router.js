import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = Router();

const productManager = new ProductManager();

router.post('/', async (req, res) => {
    // {
    //     title: 'asdasd',
    //     description: 'asdasd',
    //     code: '1234CXZXC',
    //     price: 25256.56,
    //     status: true,
    //     stock: 10,
    //     category: 'food',
    //     thumbnails: ['http://google.com.ec']
    // }
    const product = req.body;

    if (!product.status) {
        product.status = true;
    }

    if (!product.title || !product.description
        || !product.code || !product.price
        || !product.category
        || !product.stock) {
        return res.status(400).send({ error: 'incomplete values' });
    }

    const result = await productManager.save(product)
    res.send({ status: 'success', result })
});

router.get('/', async (req, res) => {
    const products = await productManager.getAll();
    res.send({ status: 'success', products });
})

export default router;