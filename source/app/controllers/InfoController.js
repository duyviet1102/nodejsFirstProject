const Course = require("../model/course");
const { multipleMongooseToObj } = require("../../util/mongoose");
class InfoController {
  // [Get] / info
  stored(req, res) {
    Course.find({}).then((course) =>
      res.render("info/stored-courses", {
        course: multipleMongooseToObj(course),
      }),
    );
  }
}

module.exports = new InfoController();
