import mongoose from 'mongoose';

const toysCollection = 'toys';

const toysSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    description: String
});

const toysModel = mongoose.model(toysCollection, toysSchema);

export default toysModel;