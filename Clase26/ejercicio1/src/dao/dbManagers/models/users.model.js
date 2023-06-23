import mongoose from 'mongoose';

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String
});

const usersModel = mongoose.model(usersCollection, usersSchema);

export default usersModel;