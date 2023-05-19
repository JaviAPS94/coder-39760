import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('Coder39760'));

app.get('/set-cookies', (req, res) => {
    res.cookie(
        'CoderCookie',
        'Esta es una cookie seteada',
        { maxAge: 30000 }
    ).send('Cookie seteada');
});

app.get('/cookies', (req, res) => {
    res.send(req.cookies);
});

app.get('/delete-cookies', (req, res) => {
    res.clearCookie('CoderCookie').send('Cookie removida');
});

app.get('/set-signed-cookie', (req, res) => {
    res.cookie(
        'CoderSignedCookie',
        'Esta es una cookie muy poderosa',
        { maxAge: 30000, signed: true }
    ).send('Cookie firmada exitosamente')
});

app.get('/signed-cookies', (req, res) => {
    res.send(req.signedCookies);
});

app.listen(8080);