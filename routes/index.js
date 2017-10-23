var express=require('express');
var router = express.Router();
var twilio = require('twilio');
var mongoose = require('mongoose');
var userController = require('../controller/user');

router.post('/expense',function(req,res){
    console.log(req.body);
    res.sendStatus(200);
});

router.get('/',function(req,res){
    console.log(req);
    res.sendStatus(200);
});

module.exports = router;

