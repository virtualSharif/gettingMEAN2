var express = require('express');
var router = express.Router();

//middleware that is specific to this router
router.use(function timelog(req, res, next){
  console.log('Time: '+ Date.now());
  next();
});

router.get('/',function(req, res){
  res.send('You have hit get call on /birds');
});

router.get('/about',function(req, res){
  res.send('You have hit get call on /birds/about');
});

module.exports = router;
