import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: { type: String },
    text: { type: String },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
