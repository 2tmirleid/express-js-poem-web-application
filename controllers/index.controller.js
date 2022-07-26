class indexController {
    async index(req, res) {
        res.render('index', {
            title: 'Главная Страница'
        });
    }
}

module.exports = new indexController();