const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', require('./server/routes/router'));

app.use((req, res, next) => {
  res.render('error', {
    title: 'Error',
    path: '/error',
    current: '',
    breadCrumb: 'Error',
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
