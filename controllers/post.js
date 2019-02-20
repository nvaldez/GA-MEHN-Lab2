const Post = require("../models/post");

module.exports = {
  new: (req, res) => {
    res.render("post/new");
  },

  create: (req, res) => {
    console.log(req.body);

    Post.create({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      date: req.body.date
    }).then(post => {
      res.redirect("/");
    });
  },

  show: (req, res) => {
    res.send(`hello ${req.params.id}`);
  },
  edit: (req, res) => {
    res.send(`edit ${req.params.id}`);
  },
  update: (req, res) => {
    res.redirect("/");
  }
};
