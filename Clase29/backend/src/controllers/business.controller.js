import * as businessService from '../services/business.service.js';

const getBusiness = async (req, res) => {
    try {
        const result = await businessService.getBusiness();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const getBusinessById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await businessService.getBusinessById(id);

        if(!result) {
            return res.status(404).send({ status: 'error', message: 'user not found' });
        }

        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const createBusiness = async (req, res) => {
    try {
        const business = req.body;
        const result = await businessService.createBusiness(business);

        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

const addProduct = async (req, res) => {
    try {
        const product = req.body;
        const business = await businessService.getBusinessById(req.params.id);

        if (!business) {
            return res.status(404).send({ status: 'error', message: 'business not found' });
        }

        const updateResult = await businessService.updateBusiness(
            business,
            product
        )
        
        res.send({ status: 'success', result: updateResult });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
}

export {
    getBusiness,
    getBusinessById,
    createBusiness,
    addProduct
}