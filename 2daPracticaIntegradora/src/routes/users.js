import Router from './router.js';
import Users from '../dao/dbManagers/users.js';
import { passportStrategiesEnum } from '../config/enums.js';
import { isValidPassword, generateToken, createHash } from '../utils.js';

const usersManager = new Users();

export default class UsersRouter extends Router {
    init() {
        this.post('/login', ['PUBLIC'], passportStrategiesEnum.NOTHING, async (req, res) => {
            const { email, password } = req.body;
            const user = await usersManager.getByEmail(email);
            if (!user) return res.sendClientError('incorrect credentials');

            const comparePassword = isValidPassword(user, password);

            if (!comparePassword) {
                return res.sendClientError('incorrect credentials');
            }

            const accessToken = generateToken(user);
            res.sendSuccess({ accessToken });
        });

        this.post('/register', ['PUBLIC'], passportStrategiesEnum.NOTHING, async (req, res) => {
            try {
                const { first_name, last_name, role, email, password } = req.body;

                if (!first_name || !last_name || !role || !email || !password)
                    return res.sendClientError('incomplete values')

                const exists = await usersManager.getByEmail(email);

                if (exists)
                    return res.sendClientError('user already exists')
                
                const hashedPassword = createHash(password);

                const newUser = {
                    ...req.body
                };

                newUser.password = hashedPassword;

                const result = await usersManager.save(newUser);

                res.sendSuccess(result)
            } catch (error) {
                res.sendServerError(error.message);
            }
        })
    }
}