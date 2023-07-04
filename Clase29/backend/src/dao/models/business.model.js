import mongoose from 'mongoose';

const businessCollection = 'business';

const businessSchema = new mongoose.Schema({
    name: String,
    products: []
});

const businessModel = mongoose.model(businessCollection, businessSchema);

export default businessModel;