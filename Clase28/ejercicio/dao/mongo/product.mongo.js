import productModel from "./models/product.model.js";

export default class Products {
    constructor() {}

    get = async () => {
        return await productModel.find();
    }
}