import { Router } from 'express';
import userModel from '../models/users.model.js';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { first_name, last_name, email, age, password } = req.body;
        const exists = await userModel.findOne({ email });

        if (exists) return res.status(400).send({ status: 'error', error: 'User already exists' });

        const user = {
            first_name,
            last_name,
            email,
            age,
            password
        }

        await userModel.create(user);
        res.send({ status: 'success', message: 'User registered' })
    } catch (error) {
        res.status(500).send({ status: 'error', error });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // if(email === 'asdadssad' && password === 'asdasd') {
        //     req.session.user = {
        //         name: `${user.first_name} ${user.last_name}`,
        //         email: user.email,
        //         age: user.age,
        //         role: 'admin'
        //     }
        // }

        const user = await userModel.findOne({ email, password });

        if (!user) return res.status(400).send({ status: 'error', error: 'Incorrect credentials' });

        req.session.user = {
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            age: user.age
        }

        res.send({ status: 'success', message: 'Login success' })
    } catch (error) {
        res.status(500).send({ status: 'error', error });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.status(500).send({ status: 'error', error: 'Logout fail' });
        res.redirect('/')
    })
});

export default router;