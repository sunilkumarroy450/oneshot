const express = require("express");
const PostModel = require("../models/post.model");
const router = express.Router();

//post
router.post("/create", async (req, res) => {
  const { title, body, createdBy, createdAt } = req.body;
  try {
    const posts = new PostModel({ title, body, createdBy, createdAt });
    await posts.save();
    return res.status(201).send(posts);
  } catch (error) {
    console.log(error);
    return res.status(403).send({ msg: error.message });
  }
});

module.exports = router;
