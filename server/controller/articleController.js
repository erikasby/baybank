// Controller - controls the queries and functionality of a page

const {restart} = require('nodemon');

exports.home = async (req, res, next) => {
  try {
    res.render('index', {title: 'SEB Base - Homepage'});
  } catch (error) {
    console.log(error);
  }
};

exports.pressAndNews = async (req, res, next) => {
  try {
    res.render('pressAndNews', {title: 'SEB Base - Press and News'});
  } catch (error) {
    console.log(error);
  }
};
