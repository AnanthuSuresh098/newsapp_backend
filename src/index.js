const express = require("express");


const MyTopStoriesController = require("./controllers/MyTopStoriesController");

const MyBestStoriesController = require("./controllers/MyBestStoriesController");

const MyNewStoriesController = require("./controllers/MyNewStoriesController");


const app = express();

app.use(express.json());

app.use("/myTopStories", MyTopStoriesController);

app.use("/myBestStories", MyBestStoriesController);

app.use("/myNewStories", MyNewStoriesController);

module.exports = app;
