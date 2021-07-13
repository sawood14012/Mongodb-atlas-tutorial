const mongoose=require("mongoose")

const StudentSchema = mongoose.Schema({
    Name: String,
});

const student= mongoose.model('student', StudentSchema);

module.exports = student;