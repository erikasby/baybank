const express = require('express');

const mainController = require('../controllers/mainController');
const articleController = require('../controllers/articleController');

const router = express.Router();

// Main routes
router.get('/', mainController.getIndex);
router.get('/login', mainController.getLogin);
router.get('/register', mainController.getRegister);

// Article routes
router.get('/news/press', articleController.getPress);
router.get('/news/press/:id', articleController.getPressArticle);
router.get('/news/business', articleController.getBusiness);
router.get('/news/business/:id', articleController.getBusinessArticle);
router.get('/news/technology', articleController.getTechnology);
router.get('/news/technology/:id', articleController.getTechnologyArticle);

module.exports = router;
