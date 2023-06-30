import mongoose from 'mongoose';

const contactsCollection = 'contacts';

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String
});

//API FACEBOOK
// {
//     nombre: "alex",
//     telefono: '5456546'
// }

const contactModel = mongoose.model(contactsCollection, contactSchema);

export default contactModel;

