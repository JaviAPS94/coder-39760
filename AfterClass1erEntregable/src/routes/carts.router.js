import { Router } from 'express';
import CartManager from '../managers/CartManager.js';

const router = Router();

const cartManager = new CartManager();

router.post('/', async(req, res) => {
    const cart = {
        products: []
    };
    const result = await cartManager.save(cart);
    res.send({ status: 'success', result });
});

router.get('/:id', async(req, res) => {
    const cartId = Number(req.params.id);
    const cart = await cartManager.getById(cartId);
    if (!cart) {
        return res.status(404).send({ error: 'cart not found' });
    }
    res.send({ status: 'success', cart });
});

export default router;