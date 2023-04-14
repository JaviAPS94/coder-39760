import { Router } from 'express';

const router = Router();

const users = [];

function middleware1(req, res, next) {
    console.log('Time: ', Date.now());
    next();
}

router.use(middleware1);

router.get('/', (req, res) => {
    res.send({ users })
});

router.post('/', (req, res) => {
    // {
    //     name: 'Alex',
    //     lastname: 'Pinaida'
    // }
    const user = req.body;
    users.push(user);
    res.send({ status: 'success', user })
});

export default router;