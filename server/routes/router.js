const express = require('express');

const articleController = require('../controllers/articleController');

const router = express.Router();

// Routes
router.get('/', articleController.home);
router.get('/news', articleController.news);
router.get('/news/:id', articleController.newsArticle);
router.get('/press', articleController.press);
router.get('/press/:id', articleController.pressArticle);

module.exports = router;
