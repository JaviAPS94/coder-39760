import passport from 'passport';
import jwt from 'passport-jwt';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
        secretOrKey: 'coder39760'
    }, async (jwt_payload, done) => {
        try {
            if(!jwt_payload.jkhasdfakshdf) return done(null, false, { messages: 'User not found' })
            return done(null, jwt_payload.user);
            //req.user = {}
        } catch (error) {
            return done(error);
        }
    }))
};

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['coderCookieToken'];
    }
    return token;
}

export default initializePassport;