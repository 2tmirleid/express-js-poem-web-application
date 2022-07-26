class PoemsController {
    async getPoems(req, res) {
        res.render('poems', {
            title: 'Произведения'
        })
    }
}

module.exports = new PoemsController()