// Controller - controls the queries and functionality of a page

exports.home = async (req, res, next) => {
  try {
    res.render('index', {title: 'SEB Base - Homepage', current: 'Home'});
  } catch (error) {
    console.log(error);
  }
};

exports.news = async (req, res, next) => {
  try {
    res.render('news', {
      title: 'SEB Base - News',
      current: 'News',
    });
  } catch (error) {
    console.log(error);
  }
};

exports.press = async (req, res, next) => {
  try {
    res.render('press', {
      title: 'SEB Base - Press',
      current: 'Press',
    });
  } catch (error) {
    console.log(error);
  }
};
