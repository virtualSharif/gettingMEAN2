var express = require('express');
var router = express.Router();
var userdata = require('./userdata');

//middleware that is specific to this router
router.use(function timelog(req, res, next){
  console.log('Time: '+ Date.now());
  next();
});

router.get('/',function(req, res){
  res.send(userdata.data);
});

router.get('/:userId',function(req, res){
  var userId = req.params.userId;
  var user = null;
  for(var i=0;i< userdata.data.length; i++){
    if(userId == userdata.data[i].id){
      user = userdata.data[i];
      break;
    }
  }
  //ES6
  //var user = userdata.data.find(user => user.id == userId);
  res.send(user);
});

module.exports = router;
