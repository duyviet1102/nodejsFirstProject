const express = require("express");
const router = express.Router();

// config
const courseController = require("../app/controllers/CourseController");
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.use("/:slug", courseController.show);
module.exports = router;
