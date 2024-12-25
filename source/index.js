// routes file for ac
// import route from './routes'
const port = 3000;
const route = require("./routes");
const path = require("path");
var express = require("express"); //nhap module express
var morgan = require("morgan");
const handlerbars = require("express-handlebars").engine;
const app = express(); // tao app express
const db = require("./config/db");
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
db();
// app.use(express.static(path.join(_dirname,'public')))
//HTTP logger
app.use(morgan("combined")); // log
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
// template engine
app.engine("handlebars", handlerbars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));
route(app);
// routes
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
