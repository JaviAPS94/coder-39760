export default class CartManager {
    constructor() {
        this.carts = [];
    }

    async save(cart) {
        if (this.carts.length === 0) {
            cart.id = 1;
        } else {
            cart.id = this.carts[this.carts.length - 1].id + 1;
        }

        this.carts.push(cart);
        return cart;
    }

    async getById(id) {
        const cart = this.carts.find(cart => cart.id === id);
        return cart;
    }
}