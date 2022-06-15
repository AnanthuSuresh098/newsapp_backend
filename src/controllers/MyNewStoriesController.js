const express = require("express");

const axios = require("axios");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    let response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`
    );

    const NewstoriesList = [];

    const newstoryMap = response.data.map(async (id) => {
      let getstory = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      NewstoriesList.push(getstory.data);
    });

    await Promise.all(newstoryMap);

    return res.status(200).send({ NewStories: NewstoriesList });
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
