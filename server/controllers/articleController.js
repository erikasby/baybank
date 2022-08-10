require('../models/database');
const Article = require('../models/Article');

// GET
// Press
exports.getPress = async (req, res, next) => {
    try {
        const pressArticles = await Article.find({category: 'Press'}).sort({
            _id: -1,
        });

        res.render('articles', {
            title: 'Press',
            path: '/news/press',
            active: 'Press',
            article: pressArticles,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// GET
// Press Article
exports.getPressArticle = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        const article = await Article.find({category: 'Press', _id: articleId})[0];

        res.render('article', {
            title: article.title,
            path: '/news/press',
            active: 'Press',
            article: article,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// GET
// Business
exports.getBusiness = async (req, res, next) => {
    try {
        const newsArticles = await Article.find({category: 'Business'}).sort({_id: -1});

        res.render('articles', {
            title: 'Business',
            path: '/news/business',
            active: 'Business',
            article: newsArticles,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// GET
// Business Article
exports.getBusinessArticle = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        const article = await Article.find({category: 'Business', _id: articleId})[0];

        res.render('article', {
            title: article.title,
            path: '/news/business',
            active: 'Business',
            article: article,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// GET
// Technology
exports.getTechnology = async (req, res, next) => {
    try {
        const newsArticles = await Article.find({category: 'Technology'}).sort({_id: -1});

        res.render('articles', {
            title: 'Technology',
            path: '/news/technology',
            active: 'Technology',
            article: newsArticles,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

// GET
// Technology Article
exports.getTechnologyArticle = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        const article = await Article.find({category: 'Technology', _id: articleId})[0];

        res.render('article', {
            title: article.title,
            path: '/news/technology',
            active: 'Technology',
            article: article,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};
