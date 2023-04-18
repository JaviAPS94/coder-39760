export default class ProductManager {

  constructor() {
    this.products = [];
  }

  async getAll() {
    return this.products;
  }

  async save(product) {
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push(product);
    return product;
  }
}