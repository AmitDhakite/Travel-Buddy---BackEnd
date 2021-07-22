import express from "express";
const router = express.Router();

import { register } from "../controllers/user.controller.js";

router.get("/register", register);

export default router;
