const { Article } = require("../models");

exports.home = (req, res) => {
  const title = "Hello World!",
    subTitle = "Welcome to the World!";

  res.render("index", { title, subTitle });
};

exports.about = (req, res) => {
  const title = "this is about!";
  res.render("about", { title });
};

exports.articles = (req, res) => {
  Article.findAll().then((articles) => {
    res.render("articles", { title: "Articles", articles });
  });
};
