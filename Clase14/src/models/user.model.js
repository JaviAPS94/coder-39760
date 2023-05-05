import mongoose from 'mongoose';

const userCollection = 'usuarios';

// {
//     first_name: 'Alex',
//     last_name: 'Pinaida',
//     email: 'ap@hotmail.com'
// }

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    }
});

export const userModel = mongoose.model(userCollection, userSchema);