// Controller - controls the queries and functionality of a page

exports.homepage = async (req, res) => {
  try {
    res.render('index', {title: 'SEB Base - Homepage'});
  } catch (error) {
    console.log(error);
  }
};
