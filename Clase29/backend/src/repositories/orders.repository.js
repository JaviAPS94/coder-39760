import OrdersDao from '../dao/classes/orders.dao.js';

export default class OrdersRepository {
    constructor() {
        this.dao = new OrdersDao();
    }

    getOrders = async () => {
        const result = await this.dao.getOrders();
        return result;
    }

    getOrderById = async (id) => {
        const result = await this.dao.getOrderById(id);
        return result;
    }

    createOrder = async (order) => {
        const result = await this.dao.createOrder(order);
        return result;
    }

    updateOrder = async (order) => {
        const result = await this.dao.updateOrder(order._id, order);
        return result;
    }
}