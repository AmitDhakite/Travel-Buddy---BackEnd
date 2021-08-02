import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  userId: { type: String },
  from: { type: String },
  to: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  twoWay: { type: Boolean },
  transport: { type: String },
  noOfPeople: { type: Number },
});

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;
