const express = require('express');
const newsController = require('../app/controllers/NewsController')

const newsRouter = express.Router()
newsRouter.use('/', newsController.index)

module.export = newsRouter