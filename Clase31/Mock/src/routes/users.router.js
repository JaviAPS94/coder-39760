import { Router } from "express";
import { generateUser } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
    let users = [];
    for(let i=0; i< 100; i++) {
        users.push(generateUser());
    }

    res.send({
        status: 'ok',
        count: users.length,
        data: users
    });
});

export default router;