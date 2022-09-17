'use strict';

const Article = require('../../models/Article');
const User = require('../../models/User');

exports.loadMoreNews = (req, res, next) => {
    const lastArticleId = req.query.doc;

    // Fetch articles
    // Populate User in every article
    // Send json data of these articles to frontend

    // Article.filter()

    const articles = [];

    const updatedArticle = {...Article};

    updatedArticle.author = User;

    for (let i = 0; i < 9; i++) {
        articles.push(updatedArticle);
    }

    res.json(articles);
};
