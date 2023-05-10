import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: Number,
    birth_date: Date,
    gender: {
        type: String,
        enum: ["M", "F"]
    },
    courses: {
        type: Array,
        default: []
    }
});

export const userModel = mongoose.model(userCollection, userSchema)