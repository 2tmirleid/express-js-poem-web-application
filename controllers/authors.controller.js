class AuthorsController {
    async getAllAuthors(req, res) {
        res.render('authors', {
            title: 'Авторы'
        })
    } 
}

module.exports = new AuthorsController()