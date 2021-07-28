import express from "express";
const router = express.Router();

import {
  register,
  getUsers,
  getUserById,
  editUser,
} from "../controllers/user.controller.js";

router.post("/register", register);
router.get("/register", getUsers);
router.post("/getUser", getUserById);
router.post("/editUser", editUser);

export default router;
