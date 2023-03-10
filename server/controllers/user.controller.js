const express = require("express");
const router = express.Router();
const UserModel = require("../models/Users.model");

//signup
router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = new UserModel({ username, email, password, role });
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    return res.status(403).send(error);
  }
});

//login
router.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user) {
    //   for (let i = 0; i < user.length; i++) {
    //     if (user[i].email === email) {
        // }
        //   }
        return res.status(200).send({ login: true, userData: user });
    }

    return res.send({ login: false });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
