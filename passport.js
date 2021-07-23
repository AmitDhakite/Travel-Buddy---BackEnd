import passport from "passport";
import Local from "passport-local";
var LocalStrategy = Local.Strategy;
import User from "./models/user.model.js";
import passportJWT from "passport-jwt";
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
import bcrypt from "bcrypt";

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret",
      passReqToCallback: true,
    },
    function (req, jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      return User.findById(jwtPayload._id)
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, cb) {
      try {
        console.log("in passport");
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        User.findOne({ email }, (error, data) => {
          if (data === undefined || data === null) {
            return cb(null, false, { message: "Incorrect email or password." });
          }
          bcrypt.compare(password, data.password, function (err, result) {
            if (result) {
              return cb(null, data, { message: "Logged In Successfully" });
            } else {
              return cb(null, false, {
                message: "Incorrect email or password.",
              });
            }
          });
        });
      } catch (err) {
        cb(err);
      }
    }
  )
);
