import { v4 as uuidv4 } from 'uuid';


export default class Contacts {
    constructor() {
        this.data = [];
    }

    get = async () => {
        return this.data;
    }

    create = async (contact) => {
        contact._id = uuidv4();
        console.log(contact);
        this.data.push(contact);
        return contact;
    }

    modify = async(id, contact) => {
        const index = this.data.findIndex(c => c._id === id);
        this.data[index] = contact;
        return contact;
    }

    delete = async(id) => {
        const index = this.data.findIndex(c => c._id === id);
        this.data.splice(index, 1);
        return { id };
    }
}