const Course = require("../model/course");
const { multipleMongooseToObj } = require("../../util/mongoose");
class SiteController {
  // [Get] / news
  async index(req, res, next) {
    Course.find({})
      .then((courses) => {
        courses = multipleMongooseToObj(courses);

        res.render("home", { courses });
        console.log(typeof multipleMongooseToObj); // Gửi dữ liệu khóa học dưới dạng JSON
      })
      .catch(next);
  }

  show(req, res) {
    res.send("NEWS DETAIL");
  }
}

module.exports = new SiteController();
