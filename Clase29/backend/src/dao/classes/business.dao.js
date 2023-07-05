import businessModel from '../models/business.model.js';

export default class BusinessDao {
    getBusiness = async () => {
        const result = await businessModel.find();
        return result;
    }

    getBusinessById = async (id) => {
        const result = await businessModel.findById(id);
        return result;
    }

    createBusiness = async (business) => {
        const result = await businessModel.create(business);
        return result;
    }

    updateBusiness = async (id, business) => {
        const result = await businessModel.findByIdAndUpdate(id, business);
        return result;
    }
}