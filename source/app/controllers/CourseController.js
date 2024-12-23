const Course = require("../model/course");
const { mongooseToObject } = require("../../util/mongoose");
const course = require("../model/course");
class CourseController {
  // [Get] / courses / html
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(console.log(typeof course), (course) =>
        res.render("course/show", { course: course.toObject() }),
      )
      .catch(next);
  }
  //   show(req, res) {
  //     Course.findOne({ slug: req.params.slug }).then(res.send(typeof course));
  //   }
}

module.exports = new CourseController();
