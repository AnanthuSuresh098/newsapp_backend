const express = require("express");


const MyTopStoriesController = require("./controllers/MyTopStoriesController");

const MyBestStoriesController = require("./controllers/MyBestStoriesController");

const MyNewStoriesController = require("./controllers/MyNewStoriesController");


const app = express();

app.use(express.json());


app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/topstories", MyTopStoriesController);

app.use("/beststories", MyBestStoriesController);

app.use("/newstories", MyNewStoriesController);

module.exports = app;
