import express from "express";
const router = express.Router();

import {
  register,
  getUsers,
  getUserById,
  editUser,
} from "../controllers/user.controller.js";

import {
  addTrip,
  getAllTripsById,
  deleteTrip,
  getAllTrips,
} from "../controllers/trip.controller.js";

import {
  addNewConversation,
  getConversations,
} from "../controllers/conversation.controller.js";

import { addNewMessage, getChats } from "../controllers/message.controller.js";

//USER
router.post("/register", register);
router.get("/register", getUsers);
router.post("/getUser", getUserById);
router.post("/editUser", editUser);

//TRIP
router.post("/addTrip", addTrip);
router.post("/getAllTripsById", getAllTripsById);
router.post("/getAllTrips", getAllTrips);
router.post("/deleteTrip", deleteTrip);

//CONVERSATION
router.post("/addNewConversation", addNewConversation);
router.post("/addNewMessage", addNewMessage);
router.get("/getChats/:userId", getChats);
router.get("/getConversations/:userId", getConversations);

export default router;
