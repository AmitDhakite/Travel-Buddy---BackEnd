import User from "../models/user.model.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

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

export const getUsers = (req, res) => {
  try {
    User.find({}, (err, foundUsers) => {
      res.status(200).json(foundUsers);
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getUserById = (req, res) => {
  try {
    User.findOne({ _id: req.body.userId }, (err, foundUser) => {
      if (!err) {
        res.status(200).json(foundUser);
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const editUser = (req, res) => {
  try {
    const { user, userId } = req.body;
    User.findOne({ _id: userId }, (err, foundUser) => {
      if (!err) {
        foundUser.firstName = user.firstName;
        foundUser.lastName = user.lastName;
        foundUser.mobile = user.mobile;
        foundUser.addressLine1 = user.addressLine1;
        foundUser.addressLine2 = user.addressLine2;
        foundUser.city = user.city;
        foundUser.state = user.state;
        foundUser.zipCode = user.zipCode;
        foundUser.country = user.country;
        foundUser.save();
        res.status(200).json(foundUser);
      } else {
        res.status(400).json(err);
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};
