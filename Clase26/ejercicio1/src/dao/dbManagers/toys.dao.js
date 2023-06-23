import toysModel from './models/toys.model.js'

export default class ToysDao {
    constructor() {}

    async getAll() {
        return await toysModel.find();
    }

    async save(toy) {
        return await toysModel.create(toy);
    }
}