const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("post/new");
});

router.post("/", (req, res) => {
  res.send("post");
});

router.get("/:id", (req, res) => {
  res.render("post/show");
});

router.get("/:id/edit", (req, res) => {
  res.render("post/edit");
});

router.put("/:id", (req, res) => {});

module.exports = router;
