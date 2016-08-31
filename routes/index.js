var express = require('express');
var router = express.Router();
var isgd = require('isgd');
var valid = require('url-valid');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/new/:url(*)', function (req, res, next) {
    
    var inputedURL = req.params.url;
    var inputedURLString = req.params.url.toString();
    
    valid(inputedURL, function (err, valid) {
        
        if (err) throw res.json({error:"Please use a valid URL"});

    
        isgd.shorten(inputedURLString , function(result) {

        res.json({inputedURL: inputedURL, shortenedURL: result});

        });
        
    });
  
});



module.exports = router;
