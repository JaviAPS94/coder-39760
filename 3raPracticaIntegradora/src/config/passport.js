import passport from 'passport';
import jwt from 'passport-jwt';
import { PRIVATE_KEY } from './contants.js';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: PRIVATE_KEY
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload.user);
            //req.user
        } catch (error) {
            return done(error);
        }
    }))
};

export default initializePassport;