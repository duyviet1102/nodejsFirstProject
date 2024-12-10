
const path = require('path')
const port = 8888
var express = require('express')//nhap module express 
var morgan = require('morgan')
const handlerbars = require('express-handlebars').engine
var app = express() // tao app express 
 //HTTP logger 
app.use(morgan('combined'))

// template engine
app.engine('handlebars', handlerbars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))

//routes 
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
