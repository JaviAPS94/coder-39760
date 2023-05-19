import { Router } from 'express';
import studentModel from '../models/students.js';

const router = Router();

router.get('/students', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const {
        docs,
        hasPrevPage,
        hasNextPage,
        nextPage,
        prevPage
    } = await studentModel.paginate({}, { limit, page, lean: true });

    const students = docs;

    res.render('students', {
        students,
        hasPrevPage,
        hasNextPage,
        nextPage,
        prevPage
    });
});

export default router;