var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(`./public/file`, (err, files) => {
    
    res.render('index',{files:files});
  });
});


router.get('/show/:filename',function(req,res){
  fs.readFile(`./public/file/`+req.params.filename, 'utf8', function(err, data) {
    res.render('show',{data:data});
  });
  
})



router.post('/create', function(req, res) {
  fs.writeFile(`./public/file/`+req.body.Title.split(" ").join("")+'.txt', req.body.content, function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.redirect('/');
  });

});


module.exports = router;
