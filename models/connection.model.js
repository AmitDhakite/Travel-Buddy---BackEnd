import mongoose from "mongoose";

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  senderId: { type: String },
  tripId: { type: String },
  userId: { type: String },
});

const Connection = mongoose.model("Connection", connectionSchema);

export default Connection;
