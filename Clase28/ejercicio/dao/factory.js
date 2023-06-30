import config from "../config/config.js";

let Contacts;
const persistence = config.persistence;

switch(persistence) {
    case 'MONGO':
        console.log('Trabajando con BDD');
        const mongoose = await import("mongoose");
        await mongoose.connect(config.mongoUrl);
        const { default: ContactsMongo } = await import('./mongo/contact.mongo.js');
        Contacts = ContactsMongo;
        break;
    case 'MEMORY':
        console.log('Trabajando con MEMORY');
        const { default: ContactsMemory } = await import('./memory/contact.memory.js');
        Contacts = ContactsMemory;
        break;
}

export default Contacts;