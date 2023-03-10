const express = require("express");
const CommentModel = require("../models/Comment.model");
const router = express.Router();

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
