import { Contacts, Products } from '../dao/factory.js';
import ContactRepository from '../repositories/contacts.repository.js';
import ProductRepository from '../repositories/products.repository.js';

const contactsRepository = new ContactRepository(new Contacts());
const productsRepository = new ProductRepository(new Products());

export {
    contactsRepository,
    productsRepository
}