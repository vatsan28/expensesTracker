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
