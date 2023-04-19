import { Router } from 'express';

const router = Router();

const users = [];

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({ status: 'success', user });
});

router.get('/', (req, res) => {
    res.send({ users });
});

export default router;