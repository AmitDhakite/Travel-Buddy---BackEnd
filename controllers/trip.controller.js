import Trip from "../models/trip.model.js";
import User from "../models/user.model.js";

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

export const getAllTrips = (req, res) => {
  try {
    Trip.find({}, (err, data) => {
      if (err) {
        res.status(400).json(err);
      } else {
        User.find({}, (er, foundUsers) => {
          if (er) {
            res.status(400).json(er);
          } else {
            const result = [];
            data.forEach((d) => {
              foundUsers.forEach((u) => {
                if (d.userId == u._id) {
                  result.push({
                    userId: d.userId,
                    from: d.from,
                    to: d.to,
                    startDate: d.startDate,
                    endDate: d.endDate,
                    twoWay: d.twoWay,
                    transport: d.transport,
                    noOfPeople: d.noOfPeople,
                    name: u.firstName + " " + u.lastName,
                  });
                  return;
                }
              });
            });
            res.status(200).json(result);
          }
        });
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const deleteTrip = (req, res) => {
  try {
    // console.log(req.body.id);
    Trip.deleteOne({ _id: req.body.id }, (err) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json("Trip Deleted");
      }
    });
  } catch (e) {
    res.status(400).json(e);
  }
};
