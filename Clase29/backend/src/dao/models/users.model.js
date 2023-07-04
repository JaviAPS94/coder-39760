import mongoose from 'mongoose';

const usersCollection = 'users';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'orders'
        }
    ]
});

userSchema.pre('find', function () {
    this.populate('orders');
});

const usersModel = mongoose.model(usersCollection, userSchema);

export default usersModel;