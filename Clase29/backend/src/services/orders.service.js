import OrdersRepository from '../repositories/orders.repository.js';
import UsersRepository from '../repositories/users.repository.js';

const ordersRepository = new OrdersRepository();
const usersRepository = new UsersRepository();

const createOrder = async(user, business, products) => {
    // {
    //     number: 'asdasdasd',
    //     business,
    //     user,
    //     status: 'pending',
    //     products: [1,2,3], //price: 45, 46, 47
    //     totalPrice: 50
    // }
    const currentProducts = business.products.filter((product) => 
        products.includes(product.id)
    );

    const sum = currentProducts.reduce((acc, prev) => {
        acc += prev.price;
        return acc;
    }, 0);

    const orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);

    const order = {
        number: orderNumber,
        business: business._id,
        user: user._id,
        status: 'pending',
        products: currentProducts.map((product) => product.id),
        total_price: sum
    };

    console.log(order);

    const orderResult = await ordersRepository.createOrder(order);

    user.orders.push(orderResult._id);

    await usersRepository.updateUser(user._id, user);

    return orderResult;
}

const getOrders = async () => {
    const result = await ordersRepository.getOrders();
    return result;
}

const getOrderById = async (id) => {
    const result = await ordersRepository.getOrderById(id);
    return result;
}

const resolveOrder = async (order, status) => {
    order.status = status;
    await ordersRepository.updateOrder(order);
    return order;
}

export {
    createOrder,
    getOrders,
    getOrderById,
    resolveOrder
}