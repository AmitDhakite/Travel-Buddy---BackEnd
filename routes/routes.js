import express from "express";
const router = express.Router();

import { register, getUsers } from "../controllers/user.controller.js";

router.post("/register", register);
router.get("/register", getUsers);

export default router;
