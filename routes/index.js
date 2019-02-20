const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello there");
});

router.get("/new", (req, res) => {
  res.send("create new");
});

router.post("/", (req, res) => {
  res.send("post");
});

router.get("/:id", (req, res) => {
  res.send("show");
});

router.get("/:id/edit", (req, res) => {
  res.send("edit");
});

router.put("/:id", (req, res) => {});
module.exports = router;
