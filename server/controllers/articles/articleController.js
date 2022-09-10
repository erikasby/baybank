'use strict';

const Article = require('../../models/ArticleFake');
const User = require('../../models/UserFake');
const {parseAndSanitizeMarkdownToHTML} = require('../../helpers');

const article = {...Article};
const user = {...User};

article.content = parseAndSanitizeMarkdownToHTML(article.content);
// article.updatedAt = new Date(article.updatedAt).toDateString();
article.updatedAt = 'Aug 17';

// GET Article
exports.getPressArticle = async (req, res, next) =>
    renderArticle(req, res, next, article, user, '/news/press', 'Press');

exports.getBusinessArticle = async (req, res, next) =>
    renderArticle(req, res, next, article, user, '/news/business', 'Business');

exports.getTechnologyArticle = async (req, res, next) =>
    renderArticle(req, res, next, article, user, '/news/technology', 'Technology');

exports.getLifestyleArticle = async (req, res, next) =>
    renderArticle(req, res, next, article, user, '/news/lifestyle', 'Lifestyle');

// GET Articles
exports.getPress = async (req, res, next) => renderArticles(req, res, next, '/news/press', 'Press');
exports.getBusiness = async (req, res, next) => renderArticles(req, res, next, '/news/business', 'Business');
exports.getTechnology = async (req, res, next) => renderArticles(req, res, next, '/news/technology', 'Technology');
exports.getLifestyle = async (req, res, next) => renderArticles(req, res, next, '/news/lifestyle', 'Lifestyle');

const renderArticles = async (req, res, next, path, category) => {
    try {
        // const articles = await Article.find({category: category}).sort({_id: -1});

        const lastArticle = article;

        res.render('articles', {
            title: category + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            author: user,
            article: article,
            lastArticle: lastArticle,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

const renderArticle = async (req, res, next, article, user, path, category) => {
    try {
        // let articleId = req.params.articleId;
        // const article = await Article.find({category: category, _id: articleId})[0];

        res.render('article', {
            // title: article.title,
            title: article.title + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            article: article,
            author: user,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// Future functions:
// const getArticles = () => {}
// const getArticle = () => {}
// const renderError = () => {}
