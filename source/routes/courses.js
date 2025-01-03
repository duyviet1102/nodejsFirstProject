const express = require("express");
const router = express.Router();

// config
const courseController = require("../app/controllers/CourseController");
router.get("/:id/edit", courseController.edit);
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.put("/:id", courseController.update);
router.use("/:slug", courseController.show);
module.exports = router;
