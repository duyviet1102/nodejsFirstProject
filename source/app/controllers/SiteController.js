class SiteController {
    // [Get] / news
    index(req, res) {
        res.render('home');
    }

    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new SiteController();
