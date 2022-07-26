class TckachenkoController {
    async getAllPoems(req, res) {
        res.render('tckachenko', {
            title: 'Солнечные Пятна'
        })
    }

    async getFirstPoem(req, res) {
        res.render('t-firstpoem', {
            title: 'Солнечные Пятна'
        })
    }
}

module.exports = new TckachenkoController()