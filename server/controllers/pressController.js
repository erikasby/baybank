require('../models/database');
const Article = require('../models/Article');

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
            article: pressArticles,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
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
            article: article,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
        });
    }
};
