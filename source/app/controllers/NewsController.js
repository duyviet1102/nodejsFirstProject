class NewsController {
  // [Get] / news
  index(req, res) {
    res.send("news");
  }

  show(req, res) {
    res.send("Hello world");
  }
}

module.exports = new NewsController();
