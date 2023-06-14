import { Router } from 'express';
import Users from '../dao/dbManagers/users.js'
import Courses from '../dao/dbManagers/courses.js'

const router = Router();

const usersManager = new Users();
const coursesManager = new Courses();

router.get('/', async (req, res) => {
    try {
        const users = await usersManager.getAll();
        res.render('users', { users })   
    } catch (error) {
        console.log(error);
    }
})

router.get('/courses', async (req, res) => {
    try {
        const courses = await coursesManager.getAll();
        res.render('courses', { courses })   
    } catch (error) {
        console.log(error);
    }
});

export default router;