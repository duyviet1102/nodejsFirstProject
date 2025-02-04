const express = require("express");
const router = express.Router();

// config
const courseController = require("../app/controllers/CourseController");
router.get("/:id/edit", courseController.edit);
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.delete("/:id", courseController.destroy);
router.patch("/:id/restore", courseController.restore);
router.put("/:id", courseController.update);// sua
router.use("/:slug", courseController.show);
module.exports = router;
