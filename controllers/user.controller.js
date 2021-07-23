import User from "../models/user.model.js";
import bcrypt from "bcrypt";
const saltRounds = 12;

export const register = (req, res) => {
  try {
    const newUser = req.body;
    User.findOne({ email: newUser.email }, (err, foundUser) => {
      if (foundUser !== null && foundUser !== undefined) {
        res.status(200).send("User already exists");
      } else {
        bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
          newUser.password = hash;
          User.create(newUser, (err) => {
            if (!err) {
              res.status(200).send("User Registered");
            } else {
              res.status(400).json(err);
            }
          });
        });
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};
