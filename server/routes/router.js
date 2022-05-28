const express = require('express');
const router = express.Router();
const articleController = require('../controller/articleController');

// Routes
router.get('/', articleController.home);
router.get('/press-and-news', articleController.pressAndNews);

module.exports = router;
