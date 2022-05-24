const express = require('express');
const router = express.Router();
const articleController = require('../controller/articleController');

// Routes
router.get('/', articleController.homepage);

module.exports = router;
