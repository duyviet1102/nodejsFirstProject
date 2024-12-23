const express = require("express");
const router = express.Router();

// config
const courseController = require("../app/controllers/CourseController");
router.use("/:slug", courseController.show);
module.exports = router;
