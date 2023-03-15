const express = require("express");
const CommentModel = require("../models/Comment.model");
const PostModel = require("../models/post.model");
const router = express.Router();

//get
router.get("/", async (req, res) => {
  try {
    const allPosts = await PostModel.find().populate("userId")
    return res.status(201).send(allPosts);
  } catch (error) {
    return res.send({ msg: "Something wrong happened" });
  }
});

//post
router.post("/create", async (req, res) => {
  const { title, body, userId, createdAt } = req.body;
  try {
    const posts = new PostModel({ title, body, userId, createdAt });
    console.log(posts);
    await posts.save();
    return res.status(201).send(posts);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: error.message });
  }
});

//get:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await PostModel.findById({ _id: id });
    const comments =await CommentModel.find({
      postId:id
    })
    return res.status(200).send({posts,comments});
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
});

module.exports = router;
