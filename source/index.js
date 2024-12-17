// routes file for ac
// import route from './routes'
const port = 3000;
const route = require('./routes');
const path = require('path');
var express = require('express'); //nhap module express
var morgan = require('morgan');
const handlerbars = require('express-handlebars').engine;
const app = express(); // tao app express
// app.use(express.static(path.join(_dirname,'public')))
//HTTP logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
// template engine
app.engine('handlebars', handlerbars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);
// routes
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
