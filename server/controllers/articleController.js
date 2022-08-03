require('../models/database');
const Article = require('../models/Article');

// GET
// News
exports.news = async (req, res, next) => {
    try {
        const newsArticles = await Article.find({category: 'News'}).sort({_id: -1});

        res.render('news', {
            title: 'News',
            path: '/news',
            active: 'News',
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
// News Article
exports.newsArticle = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        const article = await Article.find({category: 'News', _id: articleId})[0];

        res.render('article', {
            title: article.title,
            path: '/news',
            active: 'News',
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
// Press
exports.press = async (req, res, next) => {
    try {
        const pressArticles = await Article.find({category: 'Press'}).sort({
            _id: -1,
        });

        res.render('press', {
            title: 'Press',
            path: '/press',
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
exports.pressArticle = async (req, res, next) => {
    try {
        let articleId = req.params.id;
        const article = await Article.find({category: 'Press', _id: articleId})[0];

        res.render('article', {
            title: article.title,
            path: '/press',
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
