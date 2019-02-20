const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.use("/post", require("./post.js"));

module.exports = router;
