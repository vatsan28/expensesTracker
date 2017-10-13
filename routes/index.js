var express=require('express');
var router = express.Router();
var twilio = require('twilio');

router.get('/',function(req,res){
    console.log('Expenses tracker');

    res.send(200);
});

module.exports = router;