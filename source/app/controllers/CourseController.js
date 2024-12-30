const Course = require("../model/course");
class CourseController {
  // [Get] / courses / html
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("course/show", { course: course.toObject() }),
      )
      .catch(next);
  }

  // get / course / create
  create(req, res, next) {
    res.render("course/create");
  }
  //post / course / store
  store(req, res, next) {
    // res.json(req.body); // res.render("course/store");
    const formData = req.body;
    formData.image = `${req.body.image}`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CourseController();
