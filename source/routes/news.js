const express = require('express');
const router = express.Router();

// config
const newsController = require('../app/controllers/NewsController');
 // newsConrollter .index
router.use('/:slug', newsController.show);
router.use('/', newsController.index);
module.exports = router;
