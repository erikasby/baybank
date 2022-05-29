const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Routes
router.get('/', articleController.home);
router.get('/news', articleController.news);
router.get('/news/:id', articleController.newsArticle);
router.get('/press', articleController.press);
router.get('/press/:id', articleController.pressArticle);
// router.get('/article', articleController.article);

module.exports = router;
