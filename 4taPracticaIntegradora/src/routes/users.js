import Router from './router.js';
import { passportStrategiesEnum } from '../config/enums.js';
import { login, register } from '../controllers/users.js'

export default class UsersRouter extends Router {
    init() {
        this.post('/login', ['PUBLIC'], passportStrategiesEnum.NOTHING, login);
        this.post('/register', ['PUBLIC'], passportStrategiesEnum.NOTHING, register);
    }
}