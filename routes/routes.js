import express from "express";
const router = express.Router();

import {
  register,
  getUsers,
  getUserById,
  editUser,
} from "../controllers/user.controller.js";

import { addTrip, getAllTripsById } from "../controllers/trip.controller.js";

//USER
router.post("/register", register);
router.get("/register", getUsers);
router.post("/getUser", getUserById);
router.post("/editUser", editUser);

//TRIP
router.post("/addTrip", addTrip);
router.post("/getAllTripsById", getAllTripsById);

export default router;

//7058779103
