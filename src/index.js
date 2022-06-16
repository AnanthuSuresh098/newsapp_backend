const express = require("express");


const MyTopStoriesController = require("./controllers/MyTopStoriesController");

const MyBestStoriesController = require("./controllers/MyBestStoriesController");

const MyNewStoriesController = require("./controllers/MyNewStoriesController");


const app = express();

app.use(express.json());

const cors = require("cors");

app.use(
  cors({
    origin: "https://newsapp-backend00.herokuapp.com/",
  })
);

app.use("/topstories", MyTopStoriesController);

app.use("/beststories", MyBestStoriesController);

app.use("/newstories", MyNewStoriesController);

module.exports = app;
