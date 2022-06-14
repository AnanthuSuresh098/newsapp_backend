const express = require("express");


const MyTopStoriesController = require("./controllers/MyTopStoriesController");


const app = express();

app.use(express.json());

app.use("/myTopStories", MyTopStoriesController);

module.exports = app;
