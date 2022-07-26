const express = require('express')
const router = require('./routes/index.router')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT || 8888
const app = express()

function start() {
    app.listen(PORT, () => {
        console.log(`>_Server has been started on port ${PORT}`)
    })
}

app.use(router)
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
  
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
  
const urlencodedParser =  bodyParser.urlencoded({
  extended: false
})
  
  

start()