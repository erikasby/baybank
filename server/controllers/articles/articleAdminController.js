'use strict';

const Article = require('../../models/Article');

exports.getCreateArticle = async (req, res, next) => {
    try {
        res.render('article-form', {
            title: 'New article' + ' | BayBank - the best solution for both individuals and companies',
            path: '/news/new',
            active: 'New article',
        });
    } catch (error) {
        console.log(error);
        res.render('404', {
            title: '404',
            path: '/404',
            active: '',
        });
    }
};

exports.postCreateArticle = async (req, res, next) => {
    try {
        const title = req.body.title;
        const secondaryTitle = req.body.secondaryTitle;
        const category = req.body.category;
        const subCategory = req.body.subCategory;
        const imageLink = req.body.imageLink;
        const articleContent = req.body.articleContent;

        // Leaving for next time:
        // Create server side validation
        // if validation fails, redirect to same page with previous data filled in
        const isValidated = validateArticleForm(title, secondaryTitle, imageLink, articleContent);

        if (isValidated) {
            const currentDate = new Date().toUTCString();

            const article = Article.create({
                author: req.session.user._id,
                title: title,
                secondaryTitle: secondaryTitle,
                imageLink: imageLink,
                content: articleContent,
                createdAt: currentDate,
                updatedAt: currentDate,
            });

            res.redirect('/');
        } else {
            res.redirect('/news/new');
        }
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

// Helper functions

function validateArticleForm(title, secondaryTitle, imageLink, articleContent) {
    const isValidatedTitle = validateTitle(title);
    const isValidatedSecondaryTitle = validateSecondaryTitle(secondaryTitle);
    const isValidatedImageLink = validateImageLink(imageLink);
    const isValidatedArticleContent = validateArticleContent(articleContent);

    if (isValidatedTitle && isValidatedSecondaryTitle && isValidatedImageLink && isValidatedArticleContent) return true;
    else return false;
}

const validateTitle = (event) => {
    if (title.value.length < 10) return false;

    return true;
};

const validateSecondaryTitle = (event) => {
    if (secondaryTitle.value.length < 10) return false;

    return true;
};

const validateImageLink = (event) => {
    if (imageLink.value.length < 10 && imageLink.value.contains('http') === false) return false;

    return true;
};

const validateArticleContent = (event) => {
    if (articleContent.innerText.length < 10) return false;

    return true;
};
