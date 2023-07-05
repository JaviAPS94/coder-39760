import BusinessDao from '../dao/classes/business.dao.js';

export default class BusinessRepository {
    constructor() {
        this.dao = new BusinessDao();
    }

    getBusiness = async () => {
        const result = await this.dao.getBusiness();
        return result;
    }

    getBusinessById = async (id) => {
        const result = await this.dao.getBusinessById(id);
        return result;
    }

    createBusiness = async (business) => {
        const result = await this.dao.createBusiness(business);
        return result;
    }

    updateBusiness = async (business) => {
        const result = await this.dao.updateBusiness(business._id, business);
        return result;
    }
}