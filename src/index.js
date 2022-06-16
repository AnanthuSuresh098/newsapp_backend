const express = require("express");


const MyTopStoriesController = require("./controllers/MyTopStoriesController");

const MyBestStoriesController = require("./controllers/MyBestStoriesController");

const MyNewStoriesController = require("./controllers/MyNewStoriesController");


const app = express();

app.use(express.json());

const cors = require("cors");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use("/topstories", MyTopStoriesController);

app.use("/beststories", MyBestStoriesController);

app.use("/newstories", MyNewStoriesController);

module.exports = app;
