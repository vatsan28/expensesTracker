var express=require('express');
var router = express.Router();
var twilio = require('twilio');
var mongoose = require('mongoose');
var userController = require('../controller/user');

router.post('/expense',function(req,res){
    /*Step 1: Check if number is already registered.
              If yes: Save expense and send success response.
              If no: Redirect to registration details.
     Step 2: Check if body says 'trackperexReg'.
             If 'firstname, lastname, email' is present then register user and send success response.
             else send registration text format.
     */
    var phoneNo = req.body.From;
    console.log(req.body);
    userController.checkIfUserExists(phoneNo,function (result1){
       console.log(result1);
       if (!result1 && (req.body.Body.indexOf('regTrackperex') == -1)){
           res.statusCode = 200;
           res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
           res.write("Please register with TrackPerex replying with the following format: regTrackperex -firstname- -lastname- -email id-.");
           res.end();
       }else if (!result1 && (req.body.Body.indexOf('regTrackperex') != -1)){
           console.log(req.body.Body);
           var userInfo = req.body.Body.split(' ');
           userInfo.push(req.body.From);
           userController.registerUser(userInfo,function(result2){
                console.log(result2);
                if (result2=='Success'){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
                    res.write("Thanks for registering with TrackPerex.");
                    res.end();

                }else if (result2=='Error'){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
                    res.write("Error in registering with TrackPerex.");
                    res.end();

                }else{
                    console.log(result2);
                }

           });
       }else if ((result1) && (req.body.Body.indexOf('regTrackperex') != -1)){
           console.log("use already registered.");
           res.statusCode = 200;
           res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
           res.write("Number already registered.");
           res.end();
       }else if (result1 && (req.body.Body.indexOf('regTrackperex') == -1)){
           res.statusCode = 200;
           res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
           res.write("Handle message from registered user.");
           res.end();
       }

    });

});

router.get('/',function(req,res){
    console.log(req);
    res.sendStatus(200);
});

module.exports = router;

