
const path = require('path')
const port = 3000
var express = require('express')//nhap module express 
var morgan = require('morgan')
const handlerbars = require('express-handlebars').engine
const app = express() // tao app express 

// app.use(express.static(path.join(_dirname,'public')))
 //HTTP logger 
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
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
app.get('/mains', (req, res) => {
  res.render('layouts/main')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
