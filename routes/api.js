var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Db = require("../models/Db");
const student = mongoose.model("student");


router.get('/', function(req, res, next) {
  res.send('System Works!');
});



router.get('/all', function(req, res, next) {

    Db.student.find().exec((err,data)=>{
        if(err){
          const error = {
            status:false,
            message:"No students Found"
          }
          res.send(error);
    
        }
        else{
          
          const result = {
            status: true,
            data: data
          };
          res.send(result);
    
    
        }
      })
    
});


router.get('/insert', function(req, res, next) {
    console.log(req.query.name);
    // call the insert function
    insert_agenda_record(req.query.name);
    res.send('inserted successfully!');
});

async function insert_agenda_record(name) {
    //setting
    var row1 = new student({
        Name: name,
    });
    
    // save model to database
    await row1.save(function(err, row1) {
      if (err) {
        return console.error(err);
      } else {
        console.log(row1.Name + " saved to student collection.");
        return row1.Name;
      }
    });
    } 




module.exports = router;
