'use strict';

const express = require('express');

const mainController = require('../controllers/mainController');
const articleController = require('../controllers/articles/articleController');
const articleAdminController = require('../controllers/articles/articleAdminController');
const articleHelpers = require('../controllers/articles/articleHelpers');

const router = express.Router();

// Main routes
router.get('/', mainController.getIndex);
router.get('/login', mainController.getLogin);
router.get('/register', mainController.getRegister);

// Article main routes
router.get('/news/press', articleController.getPress);
router.get('/news/press/:articleId', articleController.getPressArticle);
router.get('/news/business', articleController.getBusiness);
router.get('/news/business/:articleId', articleController.getBusinessArticle);
router.get('/news/technology', articleController.getTechnology);
router.get('/news/technology/:articleId', articleController.getTechnologyArticle);
router.get('/news/lifestyle', articleController.getLifestyle);
router.get('/news/lifestyle/:articleId', articleController.getLifestyleArticle);

// Article interactions
// router.get('/news/:articleId/likes', articleController.getArticleLikes);
// router.post('/news/:articleId/likes/:userId', articleController.postArticleLikeByUserId);
// router.get('/news/:articleId/comments', articleController.getArticleComments);
// router.post('/news/:articleId/comments/:commentId/:userId', articleController.postArticleCommentByUserId);

// Article admin routes
router.get('/news/new', articleAdminController.getCreateArticle);
router.post('/news/new', articleAdminController.postCreateArticle);
router.get('/news/:id/edit', articleAdminController.getEditArticle);
router.post('/news/:id/edit', articleAdminController.postEditArticle);

// APIs
router.get('/api/load-more-news', articleHelpers.loadMoreNews);

module.exports = router;
