import { Router } from 'express';
import PaymentsService from '../services/payments.service.js';

const router = Router();

const products = [
    {id: 1, name: 'papas', price: 1000},
    {id: 2, name: 'queso', price: 500},
    {id: 3, name: 'hamburguesa', price: 1500},
    {id: 4, name: 'soda', price: 1000},
    {id: 5, name: 'golosinas', price: 800}
];

router.post('/payment-intents', async (req, res) => {
    const productRequested = products.find(product => product.id === +req.query.id);
    if(!productRequested) return res.status(404).send({status: 'error', error: 'product not found'});

    const paymentIntentInfo = {
        amount: productRequested.price,
        currency: 'usd',
        metadata: {
            userId: 'Id autogenerado por mongo',
            orderDetails: JSON.stringify({
                [productRequested.name]: 2
            }, null, '\t'),
            address: JSON.stringify({
                street: 'Calle de prueba',
                postalCode: '39760',
                externalNumber: '123123'
            }, null, '\t')
        }
    };

    const service = new PaymentsService();
    const result = await service.createPaymentIntent(paymentIntentInfo);
    console.log(result);
    res.send({ status: 'success', payload: result });
});

export default router;