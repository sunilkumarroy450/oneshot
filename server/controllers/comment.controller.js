const express = require("express");
const CommentModel = require("../models/Comment.model");
const router = express.Router();

//get comment
router.get("/", async (req, res) => {
  try {
    const allComments = await CommentModel.find();
    return res.status(200).send(allComments);
  } catch (error) {
    return res.send({ msg: "Something went wrong" });
  }
});

//Comment Creation
router.post("/post", async (req, res) => {
  const { username, comment } = req.body;
  try {
    const comments = new CommentModel({ username, comment });
    await comments.save();
    return res.status(201).send(comments);
  } catch (error) {
    return res.status(403).send({ msg: error.message });
  }
});

module.exports = router;
