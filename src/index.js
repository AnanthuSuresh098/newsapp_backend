const express = require("express");


const MyTopStoriesController = require("./controllers/MyTopStoriesController");

const MyBestStoriesController = require("./controllers/MyBestStoriesController");

const MyNewStoriesController = require("./controllers/MyNewStoriesController");


const app = express();

app.use(express.json());


app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled " });
});

app.use("/topstories", MyTopStoriesController);

app.use("/beststories", MyBestStoriesController);

app.use("/newstories", MyNewStoriesController);

module.exports = app;
