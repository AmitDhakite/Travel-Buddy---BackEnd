import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import passport from "passport";
/* POST login. */
router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(200).json({
        message: info,
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user.toJSON(), "your_jwt_secret", {
        expiresIn: "24h",
      });
      return res.json({ user, token });
    });
  })(req, res);
});

export default router;
