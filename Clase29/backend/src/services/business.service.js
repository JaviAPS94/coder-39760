import BusinessRepository from '../repositories/business.repository.js';

const businessRepository = new BusinessRepository();

const createBusiness = async(business) => {
    const result = await businessRepository.createBusiness(business);
    return result;
}

const getBusiness = async () => {
    const result = await businessRepository.getBusiness();
    return result;
}

const getBusinessById = async (id) => {
    const result = await businessRepository.getBusinessById(id);
    return result;
}

const updateBusiness = async (business, product) => {
    business.products.push(product)
    const result = await businessRepository.updateBusiness(business);
    return result;
}

export {
    createBusiness,
    getBusiness,
    getBusinessById,
    updateBusiness
}