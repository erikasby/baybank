require('../models/database');
const Article = require('../models/Article');

// GET
// Home
exports.home = async (req, res, next) => {
  try {
    res.render('index', {
      path: '/',
      title: 'Home',
      current: 'Home',
      breadCrumb: 'Home',
    });
  } catch (error) {
    console.log(error);
  }
};

// GET
// News
exports.news = async (req, res, next) => {
  const newsArticles = await Article.find({category: 'News'}).sort({_id: -1});
  try {
    res.render('news', {
      title: 'News',
      path: '/news',
      article: newsArticles,
      current: 'News',
      breadCrumb: 'News',
    });
  } catch (error) {
    console.log(error);
  }
};

// GET
// News Article
exports.newsArticle = async (req, res, next) => {
  let articleId = req.params.id;
  const article = await Article.find({category: 'News', _id: articleId});
  try {
    res.render('article', {
      title: article[0].title,
      path: '/news',
      article: article[0],
      current: 'News',
      breadCrumb: 'News+' + article[0].title,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET
// Press
exports.press = async (req, res, next) => {
  const pressArticles = await Article.find({category: 'Press'}).sort({_id: -1});
  try {
    res.render('press', {
      title: 'Press',
      path: '/press',
      article: pressArticles,
      current: 'Press',
      breadCrumb: 'Press',
    });
  } catch (error) {
    console.log(error);
  }
};

// GET
// Press Article
exports.pressArticle = async (req, res, next) => {
  let articleId = req.params.id;
  const article = await Article.find({category: 'Press', _id: articleId});

  try {
    res.render('article', {
      title: article[0].title,
      path: '/press',
      article: article[0],
      current: 'Press',
      breadCrumb: 'Press+' + article[0].title,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET
// Article from News or Press
// exports.article = async (req, res, next) => {
//   try {
//     res.render('article', {
//       path: '/article',
//       title: 'All of your necessities can be met with a loan',
//       current: 'News',
//       breadCrumb: 'News+All of your necessities can be met with a loan',
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// title, secondaryTitle, text, date, category, image
// async function insertDummyRecipeData() {
//   try {
//     await Article.insertMany([
//       {
//         title: 'SEB launches 4 day work week',
//         secondaryTitle: `Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'News',
//         image: 'news-1.jpg',
//       },
//       {
//         title: 'SEB launches 4 day work week',
//         secondaryTitle: `Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'News',
//         image: 'news-2.jpg',
//       },
//       {
//         title: 'SEB launches 4 day work week',
//         secondaryTitle: `Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'News',
//         image: 'news-3.jpg',
//       },
//       {
//         title: 'SEB launches 4 day work week',
//         secondaryTitle: `Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'News',
//         image: 'news-4.jpg',
//       },
//       {
//         title: 'SEB launches 4 day work week',
//         secondaryTitle: `Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'News',
//         image: 'news-5.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-1.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-2.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-3.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-4.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-5.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-6.jpg',
//       },
//       {
//         title: 'Market crash is inevitable according to experts',
//         secondaryTitle: `sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem`,
//         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in magni at suscipit. Hic asperiores temporibus blanditiis, dignissimos harum magnam. At eveniet magnam ipsum veritatis nisi esse illum beatae voluptates. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.  <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores corrupti perferendis a sequi! Similique autem iusto tenetur sunt ratione doloremque ad, ipsam eaque rem animi possimus in cum ullam.',
//         date: new Date().toISOString().slice(0, 10),
//         category: 'Press',
//         image: 'press-7.jpg',
//       },
//     ]);
//   } catch (error) {
//     console.log('err', +error);
//   }
// }

// insertDummyRecipeData();
