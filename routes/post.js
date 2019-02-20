const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.js");

router.get("/new", postController.new);

router.post("/", postController.create);

router.get("/:id", postController.show);

router.get("/:id/edit", postController.edit);

router.put("/:id", postController.update);

module.exports = router;
