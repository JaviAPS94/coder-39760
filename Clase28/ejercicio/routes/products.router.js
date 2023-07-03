import { Router } from 'express';
import { productsRepository } from '../repositories/index.js';

const router = Router();

router.get('/', async(req, res) => {
    const data = await productsRepository.getProducts();
    res.json(data);
});

export default router;