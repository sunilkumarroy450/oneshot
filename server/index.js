const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const app = express();
const PORT = 8080;
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport");
const userRoute = require("./controllers/user.controller");
const postRoute = require("./controllers/post.controller");
const commentRoute = require("./controllers/comment.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sessions
app.use(
  cookieSession({
    name: "session",
    keys: ["sunil"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
); //what method and origin we used on fronted,Is allow us to send session to cient-server-request

app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);
app.use("/auth", authRoute);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on PORT ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
