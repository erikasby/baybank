'use strict';

const Article = require('../../models/Article');

exports.getCreateArticle = async (req, res, next) => {
    try {
        // const lifestyleArticles = await Article.find({category: category}).sort({_id: -1});

        res.render('articles', {
            title: category + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            article: 'lifestyleArticles',
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

exports.postCreateArticle = async (req, res, next) => {
    try {
        // const lifestyleArticles = await Article.find({category: category}).sort({_id: -1});

        res.render('articles', {
            title: category + ' | BayBank - the best solution for both individuals and companies',
            path: path,
            active: category,
            article: 'lifestyleArticles',
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
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
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
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
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};
