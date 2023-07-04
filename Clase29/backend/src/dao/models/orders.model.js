import mongoose from 'mongoose';

const ordersCollection = 'orders';

const orderSchema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    products: [],
    total_price: Number,
    status: String
});

orderSchema.pre('find', function () {
    this.populate('business');
});

const orderModel = mongoose.model(ordersCollection, orderSchema);

export default orderModel;