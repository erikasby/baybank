const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Routes
router.get('/', articleController.home);
router.get('/news', articleController.news);
router.get('/press', articleController.press);
router.get('/news/article', articleController.article);

module.exports = router;
