// Controller - controls the queries and functionality of a page

exports.homepage = async (req, res) => {
    try {
        res.render('index', { title: 'SEB Workers - Homepage' });
    } catch (error) {
        console.log(error);
    }
};
