const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: false },
  body: { type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = new model("Post", PostSchema);
module.exports = PostModel;
