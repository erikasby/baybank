const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', require('./server/routes/router'));

app.use((req, res, next) => {
    res.render('404', {
        title: '404',
        path: '/404',
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
