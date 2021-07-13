const mongoose = require('mongoose');
const DBURL =
  "";
var db = mongoose.connect(DBURL)
.then(() => console.log('mongoose up'))

const student = require('./Student');

module.exports.student = student;