import mongoose from 'mongoose';

export default class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect('mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/clase19?retryWrites=true&w=majority')
    }

    static getInstance() {
        if(this.#instance) {
            console.log('La conexion ya existe');
            return this.#instance;
        }

        console.log('La conexión no existe, se crea una nueva');
        this.#instance = new MongoSingleton();
        return this.#instance;
    }
}