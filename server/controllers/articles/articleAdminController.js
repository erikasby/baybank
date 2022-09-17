'use strict';

const Article = require('../../models/Article');

exports.getCreateArticle = async (req, res, next) => renderCreateArticle(req, res, next, '/news/new');

exports.postCreateArticle = async (req, res, next) => {
    try {
        // const lifestyleArticles = await Article.find({category: category}).sort({_id: -1});

        res.render('articles', {
            title: category + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            article: 'lifestyleArticles',
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
            isLoggedIn: req.session.isLoggedIn,
        });
    }
};

exports.getEditArticle = async (req, res, next) => {
    try {
        // const lifestyleArticles = await Article.find({category: category}).sort({_id: -1});

        res.render('articles', {
            title: category + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            article: 'lifestyleArticles',
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
            isLoggedIn: req.session.isLoggedIn,
        });
    }
};

exports.postEditArticle = async (req, res, next) => {
    try {
        // const lifestyleArticles = await Article.find({category: category}).sort({_id: -1});

        res.render('articles', {
            title: category + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            article: 'lifestyleArticles',
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
            isLoggedIn: req.session.isLoggedIn,
        });
    }
};

// Helper functions
const renderCreateArticle = async (req, res, next, path) => {
    try {
        // const lifestyleArticles = await Article.find({category: category}).sort({_id: -1});

        res.render('article-form', {
            title: 'New article' + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: 'New article',
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
            isLoggedIn: req.session.isLoggedIn,
        });
    }
};

const renderEditArticle = async (req, res, next, path) => {
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
            isLoggedIn: req.session.isLoggedIn,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
            isLoggedIn: req.session.isLoggedIn,
        });
    }
};
