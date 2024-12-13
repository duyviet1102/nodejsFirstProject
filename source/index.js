
// routes file for ac
// import route from './routes'
const route = require('./routes')
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
app.use(express.urlencoded())
app.use(express.json())
// template engine
app.engine('handlebars', handlerbars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
route(app);
// routes 
// app.get('/', (req, res) => {
//   res.render('home',
//     {
//        body: "<h1>Welcome to the Home Page</h1><p>This is dynamic content for the body.</p>"
//     }
//   )
// })
// app.get('/news', (req, res) => {
//   console.log(req.query.q); 
//   res.render('news')
// })
// app.get('/mains', (req, res) => {
//   res.render('layouts/main')
// });
// app.get('/search',(req,res) => 
// {
//   res.render('search')
// })
// app.post('/search',(req,res) => 
//   {
//     console.log(req.body)
//     res.render('search')
//   })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
