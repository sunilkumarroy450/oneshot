const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = new model("Post", PostSchema);
module.exports = PostModel;
