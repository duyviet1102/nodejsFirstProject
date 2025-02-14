const {
  mongooseToObject,
  multipleMongooseToObj,
} = require("../../util/mongoose");
const Course = require("../model/course");
class CourseController {
  // [Get] / courses / html
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        // if (!course) {
        //   return res.status(404).send("Course not found");
        // }
        res.render("course/show", { course: course.toObject() });
      })
      .catch(next);
  }

  // get / course / create
  create(req, res, next) {
    res.render("course/create");
  }
  //post / course / store
  store(req, res, next) {
    // res.json(req.body); // res.render("course/store");
   
    req.body.image = `${req.body.image}`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/info"))
      .catch((error) => {});
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("course/edit", { course: course.toObject() }),
      )
      .catch(next);
  }
  // put / course/ id
  update(req, res, next) {
    // const formData = req.body;
    // formData.image`https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/info"))
      .catch(next);
  }
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  // course / :id / force destroy 
  forceDestroy(req , res , next){
     Course.deleteOne({_id: req.params.id})
     .then(() => res.redirect('back'))
     .catch(next); 
  }

   // patch / course /:id/ restore
  restore(req,res, next){
    Course.restore({ _id: req.params.id })
    .then(() => res.redirect("back"))
    .catch(next);
  }

}

module.exports = new CourseController();
