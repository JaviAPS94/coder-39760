export default class ProductRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getProducts = async () => {
        const result = await this.dao.get();
        return result;
    }
}