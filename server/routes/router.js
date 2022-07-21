const express = require('express');

const mainController = require('../controllers/mainController');
const newsController = require('../controllers/newsController');
const pressController = require('../controllers/pressController');

const router = express.Router();

// Routes
router.get('/', mainController.home);
router.get('/news', newsController.news);
router.get('/news/:id', newsController.newsArticle);
router.get('/press', pressController.press);
router.get('/press/:id', pressController.pressArticle);

module.exports = router;
