import Conversation from "../models/conversation.model.js";

export const addNewConversation = async (req, res) => {
  try {
    Conversation.find(
      { members: [req.body.recieverId, req.body.senderId] },
      async (err, found) => {
        if (found.length > 0) {
          res.status(200).json("Already Connected");
        } else {
          const newConversation = new Conversation({
            members: [req.body.senderId, req.body.recieverId],
          });
          const savedConversation = await newConversation.save();
          res.status(200).json(savedConversation);
        }
      }
    );
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversations);
  } catch (e) {
    res.status(500).json(e);
  }
};
