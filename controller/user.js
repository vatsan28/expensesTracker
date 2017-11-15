var User = require('../model/user');

exports.createUser = function (email,firstName, lastName, phoneNo, cb) {
    var newUser = new User();

    // newUser.username = username;
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.phoneNo = phoneNo;

    newUser.save(function(err){
        if (err) {
            cb('Error');
        } else {
            cb('Success');
        }
    });
}

exports.checkIfUserExists=function(phoneNo,cb){
    User.findOne({
        phoneNo: phoneNo
    }, function(err, res) {
        console.log(err,res);
        cb(res);
    });
}

exports.registerUser=function(userInfo,cb){
    var newUser = new User();

    // newUser.username = username;
    newUser.email = userInfo[3];
    newUser.firstName = userInfo[1];
    newUser.lastName = userInfo[2];
    newUser.phoneNo = userInfo[4];

    newUser.save(function(err){
        if (err) {
            console.log(err);
            cb('Error');
        } else {
            console.log('success');
            cb('Success');
        }
    });
}