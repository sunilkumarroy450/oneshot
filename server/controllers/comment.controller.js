const express = require("express");
const CommentModel = require("../models/Comment.model");
const router = express.Router();

//get comment
router.get("/", async (req, res) => {
  try {
    const allComments = await CommentModel.find().populate("userId");
    console.log(allComments, "allComments");
    return res.status(200).send(allComments);
  } catch (error) {
    return res.send({ msg: "Something went wrong" });
  }
});

//Comment Creation
router.post("/post", async (req, res) => {
  const { userId, comment, postId } = req.body;
  try {
    const comments = new CommentModel({ userId, comment, postId });
    await comments.save();
    return res.status(201).send(comments);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
});

module.exports = router;
