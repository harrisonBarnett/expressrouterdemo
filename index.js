const express = require('express')
const app = express()

// // template engine
// allows html templating (think jinja in Flask) 
const { engine } = require('express-handlebars')
// instantiate the template engine and set the default layout
app.engine('handlebars', engine({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index', {title: 'homepage'})
})
app.get('/about', (req, res) => {
    res.render('about', {title: 'about'})
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}...`)
})