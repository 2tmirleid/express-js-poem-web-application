class ContactsController {
    async getContacts(req, res) {
        res.render('contacts', {
            title: 'Контакты'
        })
    }
}

module.exports = new ContactsController()