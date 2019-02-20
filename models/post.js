const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  url: String,
  description: String,
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Post", Post);
