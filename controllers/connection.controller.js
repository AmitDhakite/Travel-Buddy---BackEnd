import Connection from "../models/connection.model.js";

export const addNewConnection = (req, res) => {
  try {
    const newConnection = new Connection(req.body);
    Connection.find(
      { senderId: req.body.senderId, userId: req.body.userId },
      async (err, found) => {
        if (!err) {
          if (found.length > 0) res.status(200).json("Already connected");
          else {
            await newConnection.save();
            res.status(200).json("saved");
          }
        } else {
          res.status(400).json(err);
        }
      }
    );
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getConnections = async (req, res) => {
  try {
    const connections = await Connection.find({ userId: req.params.userId });
    res.status(200).json(connections);
  } catch (e) {
    res.status(500).json(e);
  }
};
