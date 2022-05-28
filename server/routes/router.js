const express = require('express');
const router = express.Router();
const articleController = require('../controller/articleController');

// Routes
router.get('/', articleController.home);
router.get('/news', articleController.news);
router.get('/press', articleController.press);

module.exports = router;
