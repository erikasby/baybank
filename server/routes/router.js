const express = require('express');

const mainController = require('../controllers/mainController');
const articleController = require('../controllers/articleController');

const router = express.Router();

// Main routes
router.get('/', mainController.getIndex);
router.get('/login', mainController.getLogin);
router.get('/register', mainController.getRegister);

// Article routes
router.get('/news', articleController.getNews);
router.get('/news/:id', articleController.getNewsArticle);
router.get('/press', articleController.getPress);
router.get('/press/:id', articleController.getPressArticle);

module.exports = router;
