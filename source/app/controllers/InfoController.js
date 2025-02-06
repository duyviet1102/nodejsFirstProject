const Course = require("../model/course");
const { multipleMongooseToObj } = require("../../util/mongoose");
class InfoController {
  // [Get] / info
  stored(req, res,next) {
    Promise.all([Course.find({}), Course.countDocumentsWithDeleted({})]).then(([course,deletedCount])=> 
      res.render("info/stored-courses", {
        deletedCount: deletedCount, 
        course: multipleMongooseToObj(course),
      })
    ).catch(next);
  }
     // /info/trash
  trash(req, res , next){
    Course.findDeleted({}).then((course) => // neu delete ton tai tuc la da xoa vinh vien , dang ap dung soft delete 
    res.render("info/trash", {
      course: multipleMongooseToObj(course),
    }),
  );
  }
}


module.exports = new InfoController();