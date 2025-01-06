const express = require("express");
const router = express.Router();

// config
const InfoController = require("../app/controllers/InfoController");
router.get("/", InfoController.stored);

module.exports = router;
