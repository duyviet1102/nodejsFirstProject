const Course = require("../model/course");

class SiteController {
  // [Get] / news
  async index(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses); // Gửi dữ liệu khóa học dưới dạng JSON
      })
      .catch((err) => {
        res.status(400).json({ error: "Loi" + err });
      });
  }

  show(req, res) {
    res.send("NEWS DETAIL");
  }
}

module.exports = new SiteController();
