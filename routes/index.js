var express = require('express');
var router = express.Router();
var validUrl = require('valid-url');
var TinyURL = require('tinyurl');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/new/:url(*)', function (req, res, next) {
    
    var inputedURL = req.params.url;
    var inputedURLString = req.params.url.toString();
    
    if (validUrl.isUri(inputedURL)){  
    
        TinyURL.shorten(inputedURLString , function(result) {

        res.json({inputedURL: inputedURL, shortenedURL: result});

        });
        
    }
    
    else{
        
        res.json({error:"Please use a valid URL"});
    }
    
});



module.exports = router;
