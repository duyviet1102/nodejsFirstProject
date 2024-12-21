class NewsController 
{
     // [Get] / news 
     index(req,res){
        res.send('News detail')
     }

     show(req,res)
     {
      res.render('news')
     }
}

module.exports = new NewsController