var express=require('express');
var router = express.Router();
var twilio = require('twilio');

router.post('/',function(req,res){
    console.log(req);
    res.sendStatus(200);
});
router.get('/',function(req,res){
    console.log(req);
    res.sendStatus(200);
});

module.exports = router;

