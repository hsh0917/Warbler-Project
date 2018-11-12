require("dotenv").config(); // This is going to load all of our environment variables.
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/Messages");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth.js");
const db = require("./models");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/messages",
  loginRequired,
  ensureCorrectUser,
  messagesRoutes
);

app.get("/api/messages", loginRequired, async function(req, res, next){
    try {
        let messages = await db.Message.find().sort({ createdAt: "desc" }).populate("user", { username: true, profileImageUrl: true});
        res.status(200).json(messages);
    } catch (err){
        return next(err);
    }
})

app.use(function (req, res, next) {
    let err = new Error("Not Found"); //  http POST localhost:8081/api/auth/signin password=matt email=matt@matt.com /* In order to check the request from the server.
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
    console.log(`Server is starting on port ${PORT}`);
});
