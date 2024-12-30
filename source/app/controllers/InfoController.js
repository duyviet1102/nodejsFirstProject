const Course = require("../model/course");
class InfoController {
  // [Get] / info
  stored(req, res) {
    res.render("search");
  }
}

module.exports = new InfoController();
