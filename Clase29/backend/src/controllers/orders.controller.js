import * as usersService from '../services/users.service.js';
import * as businessService from '../services/business.service.js';
import * as ordersService from '../services/orders.service.js';

const getOrders = async (req, res) => {
    try {
        const result = await ordersService.getOrders();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ordersService.getOrderById(id);

        if(!result) {
            return res.status(404).send({ status: 'error', message: 'user not found' });
        }

        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createOrder = async (req, res) => {
    try {
        // {
        //     user: 'id del usuario mongo db',
        //     business: 'id del negocio mongo db',
        //     products: [1,2,3]
        // }
        const { user, business, products } = req.body;

        const userResult = await usersService.getUserById(user);

        if(!userResult) {
            return res.status(404).send({ status: 'error', message: 'user not found' });
        }

        const businessResult = await businessService.getBusinessById(business);

        if(!businessResult) {
            return res.status(404).send({ status: 'error', message: 'business not found' });
        }

        const result = await ordersService.createOrder(userResult, businessResult, products);

        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const resolveOrder = async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        const orderResult = await ordersService.getOrderById(id);

        if(!orderResult) {
            return res.status(404).send({ status: 'error', message: 'order not found' });
        }

        const result = await ordersService.resolveOrder(orderResult, status);

        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getOrders,
    getOrderById,
    createOrder,
    resolveOrder
}