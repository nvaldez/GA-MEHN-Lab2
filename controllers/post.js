const Post = require("../models/post");

module.exports = {
  new: (req, res) => {
    res.render("post/new");
  },

  create: (req, res) => {
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
    Post.findById(req.params.id).then(post => {
      res.render("post/show", { post });
    });
  },
  edit: (req, res) => {
    Post.findById(req.params.id).then(post => {
      res.render("post/edit", { post });
    });
  },
  update: (req, res) => {
    // 5c6dc5ec6fd2f0c62a5e87fb;
    Post.findOne({ _id: req.params.id }).then(post => {
      post.title = req.body.title;
      post.description = req.body.description;
      post.url = req.body.url;
      post.date = req.body.date;

      recipe.save(err => {
        res.redirect("/");
      });
    });
  }
};
