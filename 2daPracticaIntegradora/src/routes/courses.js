import Router from './router.js';
import Courses from '../dao/dbManagers/courses.js';
import { passportStrategiesEnum } from '../config/enums.js';

const coursesManager = new Courses();

export default class CoursesRouter extends Router {
    init() {
        this.get('/', ['ADMIN'], passportStrategiesEnum.JWT, this.getAll);
        this.post('/', ['ADMIN'], passportStrategiesEnum.JWT, this.save)
    }

    async getAll(req, res) {
        try {
            const courses = await coursesManager.getAll();
            res.sendSuccess(courses);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }

    async save(req, res) {
        const { title, description, teacher } = req.body;

        if (!title || !description || !teacher) {
            return res.sendClientError('incomplete values')
        }

        try {
            const result = await coursesManager.save({
                title,
                description,
                teacher
            });

            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }
}