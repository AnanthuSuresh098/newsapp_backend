const express = require("express");

const axios = require("axios");

const router = express.Router();


router.get("", async (req, res) => {
  try {
    let response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
    );

    const TopstoriesList = [];

     const topstoryMap =response.data.map(async (id) => {
      let getstory = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );

      TopstoriesList.push(getstory.data);
    });

      await Promise.all(topstoryMap);

    return res
      .status(200)
      .send({ TopStories: TopstoriesList});
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;

