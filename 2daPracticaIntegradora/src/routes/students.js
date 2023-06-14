import Router from './router.js';
import Students from '../dao/dbManagers/students.js';
import { passportStrategiesEnum } from '../config/enums.js';

const studentsManager = new Students();

export default class StudentsRouter extends Router {
    init() {
        this.get('/', ['ADMIN'], passportStrategiesEnum.JWT, this.getAll);
        this.get('/paginated', ['ADMIN'], passportStrategiesEnum.JWT, this.getAllPaginated);
        this.post('/', ['ADMIN'], passportStrategiesEnum.JWT, this.save)
    }

    async getAll(req, res) {
        try {
            const students = await studentsManager.getAll();
            res.sendSuccess(students);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }

    async getAllPaginated(req, res) {
        try {
            const { limit = 10, page = 1 } = req.query;
            const students = await studentsManager.getAllPaginated(limit, page);
            res.sendSuccess(students);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }

    async save(req, res) {
        try {
            const { first_name, last_name, dni, email, birth_date, gender } = req.body;

            if (!first_name || !last_name || !dni || !email || !birth_date || !gender)
                    return res.sendClientError('incomplete values')

            const result = await studentsManager.save({
                ...req.body
            });

            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        }
    }
}