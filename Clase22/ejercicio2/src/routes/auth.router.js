import { Router } from 'express';
import { authToken, generateToken, passportCall } from '../utils.js';
import passport from 'passport';

const router = Router();

const users = [{
    name: 'Alex',
    email: 'ap@gmail.com',
    password: '1234'
}];

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = users.find(user => user.email === email);

        if (exists) return res.status(400).send({ status: 'error', error: 'User already exists' });

        const user = {
            name,
            email,
            password
        }

        users.push(user);

        const accessToken = generateToken(user);

        res.send({ status: 'success', access_token: accessToken })
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', error: error.message });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = users.find(user => user.email === email && user.password === password);

        if (!user) return res.status(400).send({ status: 'error', error: 'Invalid credentials' });

        const accessToken = generateToken(user);

        res.cookie(
            'coderCookieToken', accessToken, { maxAge: 60 * 60 * 1000, httpOnly: true }
        ).send({ status: 'success' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', error });
    }
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send({ status: 'success', payload: req.user });
});

router.get('/current-custom', passportCall('jwt'), (req, res) => {
    res.send({ status: 'success', payload: req.user });
});

export default router;