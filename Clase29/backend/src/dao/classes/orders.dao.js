import ordersModel from '../models/orders.model.js';

export default class OrdersDao {
    getOrders = async () => {
        const result = await ordersModel.find();
        return result;
    }

    getOrderById = async (id) => {
        const result = await ordersModel.findById(id);
        return result;
    }

    createOrder = async (order) => {
        const result = await ordersModel.create(order);
        return result;
    }

    updateOrder = async (id, order) => {
        const result = await ordersModel.findByIdAndUpdate(id, order);
        return result;
    }
}