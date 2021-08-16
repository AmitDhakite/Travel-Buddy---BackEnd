import express from "express";
const router = express.Router();
import passport from "passport";
import "../passport.js";
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

import {
  addNewConnection,
  getConnections,
} from "../controllers/connection.controller.js";

import { addNewMessage, getChats } from "../controllers/message.controller.js";

//USER
router.post("/register", register);
router.get("/register", getUsers);
router.get(
  "/getUser/:userId",
  passport.authenticate("jwt", { session: false }),
  getUserById
);
router.post(
  "/editUser",
  passport.authenticate("jwt", { session: false }),
  editUser
);

//TRIP
router.post(
  "/addTrip",
  passport.authenticate("jwt", { session: false }),
  addTrip
);
router.post("/getAllTripsById", getAllTripsById);
router.post(
  "/getAllTrips",

  getAllTrips
);
router.post(
  "/deleteTrip",
  passport.authenticate("jwt", { session: false }),
  deleteTrip
);

//CONVERSATION
router.post(
  "/addNewConversation",
  passport.authenticate("jwt", { session: false }),
  addNewConversation
);
router.post(
  "/addNewMessage",
  passport.authenticate("jwt", { session: false }),
  addNewMessage
);
router.get(
  "/getChats/:conversationId",
  passport.authenticate("jwt", { session: false }),
  getChats
);
router.get(
  "/getConversations/:userId",
  passport.authenticate("jwt", { session: false }),
  getConversations
);

//CONNECTIONS for BUDDIES
router.post(
  "/addNewConnection",
  passport.authenticate("jwt", { session: false }),
  addNewConnection
);
router.get(
  "/getConnections/:userId",
  passport.authenticate("jwt", { session: false }),
  getConnections
);

export default router;
