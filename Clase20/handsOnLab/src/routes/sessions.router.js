import { Router } from 'express';
import userModel from '../models/users.model.js';
import { createHash, isValidPassword } from '../utils.js';

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
            password: createHash(password)
        }

        await userModel.create(user);
        res.send({ status: 'success', message: 'User registered' })
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', error: error.message });
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
        //1234 === NKJASDNFJK345892985NKJASDF$$
        const user = await userModel.findOne({ email });
        // {
        //     name: 'Alex',
        //     last_name: 'asdfasd',
        //     age: 2342134,
        // }

        if (!user) return res.status(400).send({ status: 'error', error: 'User not found' });

        if(!isValidPassword(user, password)) return res.status(401).send({ status: 'error', error: 'Incorrect credentials' });

        delete user.password;

        req.session.user = user;

        res.send({ status: 'success', message: 'Login success' })
    } catch (error) {
        console.log(error);
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