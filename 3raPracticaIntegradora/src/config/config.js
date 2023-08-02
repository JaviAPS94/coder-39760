import dotenv from 'dotenv';

dotenv.config();

export default {
    mongoUrl: process.env.MONGO_URL,
    persistence: process.env.PERSISTENCE,
    userNodemailer: process.env.USER_NODEMAILER,
    passNodemailer: process.env.PASS_NODEMAILER
}