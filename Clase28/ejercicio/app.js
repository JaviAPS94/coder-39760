import express from 'express';
import contactsRouter from './routes/contacts.router.js';
// import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.use('/api/contacts', contactsRouter);

// try {
//     await mongoose.connect('mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/clase28?retryWrites=true&w=majority');
// } catch (error) {
//     console.log(error);
// }


app.listen(8080, () => console.log('Server running'));