import Message from "../models/message.model.js";

export const addNewMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getChats = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (e) {
    res.status(500).json(e);
  }
};
