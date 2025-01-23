const express = require("express");
const router = express.Router();

// config
const InfoController = require("../app/controllers/InfoController");
router.get("/", InfoController.stored);
router.get("/trash",InfoController.trash)

module.exports = router;
