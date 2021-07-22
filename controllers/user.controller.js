import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = (req, res) => {
  try {
    console.log(req.body);
    res.send("registered");
  } catch (e) {
    console.log(e);
  }
};
