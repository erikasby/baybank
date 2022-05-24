exports.homepage = async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.log(error);
    }
};
