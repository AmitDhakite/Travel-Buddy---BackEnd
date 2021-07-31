import Trip from "../models/trip.model.js";

export const addTrip = (req, res) => {
  try {
    Trip.create(req.body, (err) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json("Trip saved...");
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const getAllTripsById = (req, res) => {
  try {
    Trip.find({ userId: req.body.id }, (err, data) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(data);
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};