
// const newsRoute = require('./news')

// function route(app)
// {
//     //routes 

//     app.use('/news', newsRoute)
       
// }
const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  app.get("/news", newsRouter);
  app.get("/", siteRouter);
}
// export default route; 
module.exports = route ;

 // app.get('/', (req, res) => {
        // res.render('home',
        //     {
        //     body: "<h1>Welcome to the Home Page</h1><p>This is dynamic content for the body.</p>"
        //     }
        // )
        // })
        // app.use('/news', newsRoute)
        // // app.get('/news', (req, res) => {
        // // console.log(req.query.q); 
        // // res.render('news')
        // // })
        // app.get('/mains', (req, res) => {
        // res.render('layouts/main')
        // });
        // app.get('/search',(req,res) => 
        // {
        // res.render('search')
        // })
        // app.post('/search',(req,res) => 
        // {
        //     console.log(req.body)
        //     res.render('search')
        // })



// export default route;
module.exports = route;

//routes
// app.get('/', (req, res) => {
// res.render('home',
//     {
//     body: "<h1>Welcome to the Home Page</h1><p>This is dynamic content for the body.</p>"
//     }
// )
// })
// app.get('/news', (req, res) => {
// console.log(req.query.q);
// res.render('news')
// })

// app.get('/mains', (req, res) => {
// res.render('layouts/main')
// });
// app.get('/search',(req,res) =>
// {
// res.render('search')
// })
// app.post('/search',(req,res) =>
// {
//     console.log(req.body)
//     res.render('search')
// })
