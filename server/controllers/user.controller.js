const express = require("express");
const router = express.Router();
const UserModel = require("../models/Users.model");

//signup
router.post("/register", async (req, res) => {
  const { username, email, password, role, image } = req.body;
  try {
    const user = new UserModel({ username, email, password, role, image });
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    return res.status(403).send(error);
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        return res.status(200).send({ login: true, userData: user });
      }
    }

    return res.send({ login: false });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
