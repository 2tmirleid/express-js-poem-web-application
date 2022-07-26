class MuhinaController {
    async getAllPoems(req, res) {
        res.render('muhina', {
            title: 'Мухина Ксения'
        })
    }

    async getNafPoem(req, res) {
        res.render('naf', {
            title: 'Мухина Ксения'
        })
    }

    async getForpianoPoem(req, res) {
        res.render('forpiano', {
            title: 'Мухина Ксения'
        })
    }
}

module.exports = new MuhinaController()