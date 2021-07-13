const mongoose = require('mongoose');
const DBURL =
  "mongodb+srv://admin:admin@mycluster.l4tgf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var db = mongoose.connect(DBURL)
.then(() => console.log('mongoose up'))

const student = require('./Student');

module.exports.student = student;