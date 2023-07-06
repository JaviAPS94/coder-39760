import express from 'express';
import twilio from 'twilio';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const TWILIO_ACCOUNT_SID = 'ACd26ad5bd2c1bb96128d26406f8ddcb84';
const TWILIO_AUTH_TOKEN = 'ca2afcd16eeca1e8813432c5fe2f7f95';
const TWILIO_PHONE_NUMBER = '+18145016989';

const client = twilio(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
)

app.get('/sms', async (req, res) => {
    await client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: '+593958963171',
        body: 'Este es un mensaje de prueba de SMS clase 39760'
    });

    res.send('SMS sent')
});

app.post('/sms-custom', async (req, res) => {
    const { name, product } = req.body;
    await client.messages.create({
        from: TWILIO_PHONE_NUMBER,
        to: '+593958963171',
        body: `Hola ${name} gracias por tu compra. Tu producto es ${product}`
    });

    res.send('SMS sent')
});

app.post('/whatsapp', async(req, res) => {
    const { name, product } = req.body;
    await client.messages.create({
        body: `Hola ${name} gracias por tu compra. Tu producto es ${product}`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+593958963171',
        mediaUrl: 'https://cdn.uc.assets.prezly.com/971f25d5-4704-4b75-9fb1-2ce35c6b498f/-/quality/best/-/format/auto/'
    });

    res.send('Whatsapp sent')
})

app.listen(8080);