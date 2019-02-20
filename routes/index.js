const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", (req, res) => {
  Post.find({}).then(posts => {
    res.render("index", { posts });
  });
});

router.use("/post", require("./post.js"));

module.exports = router;
