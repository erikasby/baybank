require('../models/database');
const Article = require('../models/Article');

exports.home = async (req, res, next) => {
  try {
    res.render('index', {title: 'Home', current: 'Home', breadCrumb: 'Home'});
  } catch (error) {
    console.log(error);
  }
};

exports.news = async (req, res, next) => {
  try {
    res.render('news', {
      title: 'News',
      current: 'News',
      breadCrumb: 'News',
    });
  } catch (error) {
    console.log(error);
  }
};

exports.press = async (req, res, next) => {
  try {
    res.render('press', {
      title: 'Press',
      current: 'Press',
      breadCrumb: 'Press',
    });
  } catch (error) {
    console.log(error);
  }
};

exports.article = async (req, res, next) => {
  try {
    res.render('article', {
      title: 'All of your necessities can be met with a loan',
      current: 'News',
      breadCrumb: 'News+All of your necessities can be met with a loan',
    });
  } catch (error) {
    console.log(error);
  }
};
