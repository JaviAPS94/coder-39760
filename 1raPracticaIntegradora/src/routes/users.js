import { Router } from 'express';
import Users from '../dao/dbManagers/users.js';

const router = Router();
const usersManager = new Users();

router.get('/', async (req, res) => {
    try {
        const users = await usersManager.getAll();
        res.send({ status: 'success', payload: users });
    } catch (error) {
        res.status(500).send({ status: 'error', error });
    }
});

router.post('/', async (req, res) => {
    const { first_name, last_name, dni, email, birth_date, gender } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).send({ status: 'error', error: 'Incomplete values' });
    }

    try {
        const result = await usersManager.save({
            first_name,
            last_name,
            dni,
            email,
            birth_date,
            gender
        });

        res.send({ status: 'success', payload: result })
    } catch (error) {
        res.status(500).send({ status: 'error', error });
    }
});

export default router;