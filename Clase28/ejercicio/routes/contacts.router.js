import { Router } from 'express';
//Import DAO memoria
//import Contacts from '../dao/memory/contact.memory.js';
//Import DAO mongo
// import Contacts from '../dao/mongo/contact.mongo.js';
import Contacts from '../dao/factory.js';
import ContactDto from '../dao/DTOs/contact.dto.js';
import ContactRepository from '../repositories/contacts.repository.js';

const router = Router();

const contacts = new Contacts();
const contactsRepository = new ContactRepository(contacts);

router.get('/', async (req, res) => {
    // const data = await contacts.get();
    const data = await contactsRepository.getContacts();
    res.json(data);
});

router.post('/', async (req, res) => {
    const {name, lastname, phone} = req.body;
    console.log(name);
    // const contact = new ContactDto({ name, lastname, phone });
    // const result = await contacts.create(contact);
    const result = await contactsRepository.createContact({ name, lastname, phone })
    res.json(result);
});

router.put('/:id', async (req, res) => {
    const {name, lastname, phone} = req.body;
    // const result = await contacts.modify(req.params.id, { name, phone });
    const result = await contactsRepository.modifyContact(id, {name, lastname, phone})
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    // const result = await contacts.delete(req.params.id);
    const result = await contactsRepository.deleteContact(req.params.id);
    res.json(result);
});

export default router;