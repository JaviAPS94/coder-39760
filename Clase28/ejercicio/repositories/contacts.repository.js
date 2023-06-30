import ContactDto from '../dao/DTOs/contact.dto.js';

export default class ContactRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getContacts = async () => {
        const result = await this.dao.get();
        return result;
    }

    createContact = async (contact) => {
        const contactToInsert = new ContactDto(contact);
        const result = await this.dao.create(contactToInsert);
        return result;
    }

    modifyContact = async (id, contact) => {
        const contactToUpdate = new ContactDto(contact);
        const result = await this.dao.modify(id, contactToUpdate);
        return result;
    }

    deleteContact = async (id) => {
        const result = await this.dao.delete(id);
        return result;
    }
}