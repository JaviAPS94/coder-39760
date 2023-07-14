import { Router } from "express";
import {
    getUsers,
    saveUser
} from '../controllers/users.controller.js';
import toAsyncRouter from 'async-express-decorator';

const router = toAsyncRouter(Router());

router.get('/', getUsers);
router.post('/', saveUser);

export default router;