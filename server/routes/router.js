const express = require('express');

const mainController = require('../controllers/mainController');
const articleController = require('../controllers/articleController');

const router = express.Router();

// Main routes
router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);

// Article routes
router.get('/news', articleController.news);
router.get('/news/:id', articleController.newsArticle);
router.get('/press', articleController.press);
router.get('/press/:id', articleController.pressArticle);

module.exports = router;
