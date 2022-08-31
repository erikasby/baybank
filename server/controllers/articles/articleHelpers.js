'use strict';

exports.loadMoreNews = (req, res, next) => {
    // Use in future to only allow request this from BayBank domain
    const host = req.headers.host;
    res.json({helloWorld: 'Hello World'});
};

exports.getArticleContent = (req, res, next) => {
    // Use in future to only allow request this from BayBank domain
    const host = req.headers.host;
    res.send(`${content}`);
};
