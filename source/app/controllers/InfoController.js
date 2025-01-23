const Course = require("../model/course");
const { multipleMongooseToObj } = require("../../util/mongoose");
class InfoController {
  // [Get] / info
  stored(req, res) {
    Course.find({}).then((course) => // neu delete ton tai tuc la da xoa vinh vien , dang ap dung soft delete 
      res.render("info/stored-courses", {
        course: multipleMongooseToObj(course),
      }),
    );
  }
     // /info/trash
  trash(req, res , next){
    Course.find({}).then((course) => // neu delete ton tai tuc la da xoa vinh vien , dang ap dung soft delete 
    res.render("info/stored-courses", {
      course: multipleMongooseToObj(course),
    }),
  );
  }
}

module.exports = new InfoController();
