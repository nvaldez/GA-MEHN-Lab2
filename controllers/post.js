module.exports = {
  new: (req, res) => {
    res.render("post/new");
  },

  create: (req, res) => {
    res.redirect("/");
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
