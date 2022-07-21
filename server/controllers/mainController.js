// GET
// Home
exports.home = async (req, res, next) => {
    try {
        res.render('index', {
            title: 'Home',
            path: '/',
        });
    } catch (error) {
        res.render('404', {
            title: '404',
            path: '/404',
        });
    }
};
