const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    postId:{
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    }
  },
  { timestamps: true }
);

const CommentModel = new model("Comment", CommentSchema);
module.exports = CommentModel;
