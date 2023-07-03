import mongoose from 'mongoose';

const productsCollection = 'products';

const productsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

const productModel = mongoose.model(productsCollection, productsSchema);

export default productModel;