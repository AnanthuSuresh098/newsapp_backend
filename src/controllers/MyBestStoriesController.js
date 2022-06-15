const express = require("express");

const axios = require("axios");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    let response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`
    );

    const BeststoriesList = [];

    const beststoryMap = response.data.map(async (id) => {
      let getstory = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      BeststoriesList.push(getstory.data);
    });

    await Promise.all(beststoryMap);

    return res.status(200).send({ BestStories: BeststoriesList });
  } catch (err) {
    return res.status(500).send(err);
  }
});
module.exports = router;
