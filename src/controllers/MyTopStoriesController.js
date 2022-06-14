const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    return res.send();
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  return res.send();
});

module.exports = router;
