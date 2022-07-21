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
            article: newsArticles,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
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
            article: article,
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
        });
    }
};
