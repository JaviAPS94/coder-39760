import { Router } from 'express';
import userModel from '../models/users.model.js';
import passport from 'passport';
import { createHash } from '../utils.js'

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: 'fail-register' }), async (req, res) => {
    res.send({ status: 'success', message: 'User registered' })
});

router.get('/fail-register', async (req, res) => {
    res.send({ status: 'error', message: 'Register failed' });
});

router.post('/login',  passport.authenticate('login', { failureRedirect: 'fail-login' }), async (req, res) => {
    if (!req.user) return res.status(400).send({ status: 'error', error: 'Invalid credentials' });

    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email
    };

    res.send({ status: 'success', message: 'Login success' })
});

router.get('/fail-login', async (req, res) => {
    res.send({ status: 'error', message: 'Login failed' });
});

router.get('/github', passport.authenticate(
    'github', { scope: ['user:email'] }
), async (req, res) => {
    res.send({ status: "success", message: "User registered" })
});

router.get('/github-callback', passport.authenticate(
    'github', { failureRedirect: '/login' }
), async (req, res) => {
    req.session.user = req.user;
    res.redirect('/')
});

router.post('/reset', async(req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) return res.status(400).send({ status: 'error', error: 'Incomplete values' });

        const user = await userModel.findOne({ email });

        if (!user) return res.status(400).send({ status: 'error', error: 'User not found' });

        user.password = createHash(password);

        await userModel.updateOne({ email }, user);

        res.send({ status: 'success', message: 'Password reset' })
    } catch (error) {
        res.status(500).send({ status: 'error', error: error.message });   
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send({ status: 'error', error: 'Logout fail' });
        res.redirect('/')
    })
});

export default router;