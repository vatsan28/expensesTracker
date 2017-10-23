var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    email: String,
    firstName: String,
    lastName: String,
    phoneNo: String
}));